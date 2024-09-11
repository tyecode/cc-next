import inquirer from "inquirer";

import installNext from "./utils/installNext";
import selectPackageManager from "./utils/selectPackageManager";
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

async function promptProjectName(): Promise<string> {
  const { projectName } = await inquirer.prompt<{ projectName: string }>({
    type: "input",
    name: "projectName",
    message: "Enter the name of your Next.js project:",
    default: "next-app",
  });
  return projectName;
}

async function promptPackageManager(): Promise<"npm" | "yarn" | "pnpm"> {
  const packageManager = await selectPackageManager();
  const validPackageManagers: Set<string> = new Set(["npm", "yarn", "pnpm"]);

  if (!validPackageManagers.has(packageManager)) {
    throw new Error(`Invalid package manager selected: ${packageManager}`);
  }

  return packageManager as "npm" | "yarn" | "pnpm";
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
