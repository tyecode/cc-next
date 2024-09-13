import { promptProjectName, promptPackageManager } from "./prompts";

import installNext from "./utils/installNext";
import createConfigFiles from "./utils/createConfigFiles";
import createUtilityFiles from "./utils/createUtilityFiles";
import installAdditionalPackages from "./utils/installAdditionalPackages";
import installPrettierAndESLint from "./utils/installPrettierAndESLint";
import updatePackageJson from "./utils/updatePackageJson";
import runFormatFix from "./utils/runFormatFix";
import createDirectories from "./utils/createDirectories";

async function main() {
  console.log("🚀 Starting Next.js project setup...");

  try {
    const packageManager = await promptPackageManager();
    const projectName = await promptProjectName();

    await installNext({ packageManager, projectName });
    await installPrettierAndESLint({ packageManager, projectName });
    await installAdditionalPackages({ packageManager, projectName });

    createConfigFiles({ projectName });
    createUtilityFiles({ projectName });
    createDirectories({ projectName });
    updatePackageJson({ projectName });

    await runFormatFix({ projectName });

    console.log("\n🎉 Setup complete! Your Next.js project is ready.");
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
