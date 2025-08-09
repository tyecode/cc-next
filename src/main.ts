import {
  promptProjectName,
  promptPackageManager,
  promptInteractiveConfig,
} from "./prompts.js";
import { CLIOptions, ProjectConfig } from "./types.js";
import { getTemplate } from "./templates/index.js";
import showDryRunPreview from "./utils/dryRunPreview.js";

import installNext from "./utils/installNext.js";
import createConfigFiles from "./utils/createConfigFiles.js";
import createUtilityFiles from "./utils/createUtilityFiles.js";
import installAdditionalPackages from "./utils/installAdditionalPackages.js";
import installPrettierAndESLint from "./utils/installPrettierAndESLint.js";
import updatePackageJson from "./utils/updatePackageJson.js";
import runFormatFix from "./utils/runFormatFix.js";
import createDirectories from "./utils/createDirectories.js";
import { performanceMonitor } from "./utils/performanceMonitor.js";

async function main(options: CLIOptions = {}) {
  performanceMonitor.start("total-setup");
  console.log("🚀 Starting Next.js project setup...");

  if (options.dryRun) {
    console.log("🔍 Running in dry-run mode - no changes will be made");
  }

  try {
    // Get project configuration
    let config: ProjectConfig;

    if (options.interactive || (!options.template && !process.env.CI)) {
      // Use interactive mode for detailed configuration
      config = await promptInteractiveConfig(options);
    } else {
      // Use simple prompts for non-interactive mode
      const packageManager = await promptPackageManager();
      const projectName = await promptProjectName();
      config = {
        packageManager,
        projectName,
        template: (options.template as "basic" | "advanced") || "basic",
        interactive: !!options.interactive,
        dryRun: !!options.dryRun,
      };
    }

    // Show dry-run preview and exit early if in dry-run mode
    if (config.dryRun) {
      showDryRunPreview(config);
      return;
    }

    const template = getTemplate(config.template);
    console.log(
      `\n🎨 Using "${config.template}" template: ${template.description}\n`
    );

    performanceMonitor.start("install-next");
    await installNext({
      packageManager: config.packageManager,
      projectName: config.projectName,
    });
    performanceMonitor.end("install-next");
    performanceMonitor.report("install-next");

    performanceMonitor.start("install-tools");
    await installPrettierAndESLint({
      packageManager: config.packageManager,
      projectName: config.projectName,
    });
    await installAdditionalPackages({
      packageManager: config.packageManager,
      projectName: config.projectName,
      template,
    });
    performanceMonitor.end("install-tools");
    performanceMonitor.report("install-tools");

    performanceMonitor.start("create-files");
    createConfigFiles({ projectName: config.projectName, template });
    createUtilityFiles({ projectName: config.projectName });
    createDirectories({ projectName: config.projectName, template });
    updatePackageJson({ projectName: config.projectName, template });
    performanceMonitor.end("create-files");
    performanceMonitor.report("create-files");

    performanceMonitor.start("format-fix");
    await runFormatFix({ projectName: config.projectName });
    performanceMonitor.end("format-fix");
    performanceMonitor.report("format-fix");

    performanceMonitor.end("total-setup");
    performanceMonitor.report("total-setup");

    console.log("\n🎉 Setup complete! Your Next.js project is ready.");
    console.log(`📁 Project created at: ./${config.projectName}`);
    console.log(`🎨 Template used: ${config.template}`);
    console.log(`📦 Package manager: ${config.packageManager}`);

    console.log("\n🚀 Next steps:");
    console.log(`  cd ${config.projectName}`);
    console.log(
      `  ${config.packageManager} ${
        config.packageManager === "npm" ? "run " : ""
      }dev`
    );
  } catch (error) {
    handleError(error);
  }
}

function handleError(error: unknown): void {
  if (error instanceof Error) {
    console.error("❌ An error occurred during setup:", error.message);
  } else {
    console.error("❌ An error occurred during setup:", error);
  }
  process.exit(1);
}

process.on("SIGINT", () => {
  console.log("\nSetup interrupted. Exiting...");
  process.exit(0);
});

export default main;
