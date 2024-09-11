import inquirer from "inquirer";

// Function to prompt the user for package manager selection
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

export default selectPackageManager;
