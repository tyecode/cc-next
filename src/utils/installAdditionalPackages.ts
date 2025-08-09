import { execa } from "execa";
import { TemplateConfig } from "../types.js";

export interface InstallOptions {
  packageManager: string;
  projectName: string;
  template: TemplateConfig;
}

export async function installAdditionalPackages({
  packageManager,
  projectName,
  template,
}: InstallOptions): Promise<void> {
  console.log("📦 Installing additional packages...");

  const additionalPackages = template.additionalPackages;
  const devDependencies = template.devDependencies;

  try {
    // Install regular dependencies
    if (additionalPackages.length > 0) {
      console.log(`Installing dependencies: ${additionalPackages.join(", ")}`);
      switch (packageManager) {
        case "npm":
          await execa("npm", ["install", ...additionalPackages], {
            cwd: projectName,
            stdio: "inherit",
          });
          break;
        case "yarn":
          await execa("yarn", ["add", ...additionalPackages], {
            cwd: projectName,
            stdio: "inherit",
          });
          break;
        case "pnpm":
          await execa("pnpm", ["add", ...additionalPackages], {
            cwd: projectName,
            stdio: "inherit",
          });
          break;
        default:
          throw new Error("Unsupported package manager.");
      }
    }

    // Install dev dependencies
    if (devDependencies.length > 0) {
      console.log(`Installing dev dependencies: ${devDependencies.join(", ")}`);
      switch (packageManager) {
        case "npm":
          await execa("npm", ["install", "--save-dev", ...devDependencies], {
            cwd: projectName,
            stdio: "inherit",
          });
          break;
        case "yarn":
          await execa("yarn", ["add", "--dev", ...devDependencies], {
            cwd: projectName,
            stdio: "inherit",
          });
          break;
        case "pnpm":
          await execa("pnpm", ["add", "--save-dev", ...devDependencies], {
            cwd: projectName,
            stdio: "inherit",
          });
          break;
        default:
          throw new Error("Unsupported package manager.");
      }
    }

    console.log("✅ Additional packages installed successfully.");
  } catch (error) {
    if (error instanceof Error) {
      console.error("❌ Failed to install additional packages:", error.message);
    } else {
      console.error("❌ Failed to install additional packages:", error);
    }
    throw error;
  }
}

export default installAdditionalPackages;
