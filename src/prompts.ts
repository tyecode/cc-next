import inquirer from "inquirer";

export async function selectPackageManager(): Promise<string> {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "packageManager",
      message: "Which package manager would you like to use?",
      choices: ["npm", "yarn", "pnpm"],
      default: "npm",
    },
  ]);

  return answers.packageManager;
}

export async function promptPackageManager(): Promise<"npm" | "yarn" | "pnpm"> {
  const packageManager = await selectPackageManager();
  const validPackageManagers: Set<string> = new Set(["npm", "yarn", "pnpm"]);

  if (!validPackageManagers.has(packageManager)) {
    throw new Error(`Invalid package manager selected: ${packageManager}`);
  }

  return packageManager as "npm" | "yarn" | "pnpm";
}

export async function promptProjectName(): Promise<string> {
  const { projectName } = await inquirer.prompt<{ projectName: string }>({
    type: "input",
    name: "projectName",
    message: "Enter the name of your Next.js project:",
    default: "next-app",
  });
  return projectName;
}
