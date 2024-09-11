import { execa } from "execa";

// Define a map of commands for each package manager
const installCommands: Record<string, string[]> = {
  npm: [
    "npm",
    "install",
    "-D",
    "prettier",
    "eslint",
    "eslint-plugin-prettier",
    "eslint-config-prettier",
    "prettier-plugin-tailwindcss",
  ],
  yarn: [
    "yarn",
    "add",
    "--dev",
    "prettier",
    "eslint",
    "eslint-plugin-prettier",
    "eslint-config-prettier",
    "prettier-plugin-tailwindcss",
  ],
  pnpm: [
    "pnpm",
    "add",
    "-D",
    "prettier",
    "eslint",
    "eslint-plugin-prettier",
    "eslint-config-prettier",
    "prettier-plugin-tailwindcss",
  ],
};

// Define the interface for the options
export interface InstallOptions {
  packageManager: "npm" | "yarn" | "pnpm";
  projectName: string;
}

export async function installPrettierAndESLint({
  packageManager,
  projectName,
}: InstallOptions): Promise<void> {
  try {
    console.log("⚙️  Installing Prettier and ESLint...");

    // Get the command array based on the selected package manager
    const command = installCommands[packageManager];
    if (!command) {
      throw new Error("Unsupported package manager.");
    }

    // Execute the command in the project directory
    await execa(command[0], command.slice(1), {
      stdio: "inherit",
      cwd: projectName,
    });

    console.log("✅ Prettier and ESLint installed successfully.");
  } catch (error) {
    if (error instanceof Error) {
      console.error("❌ Failed to install Prettier and ESLint:", error.message);
    } else {
      console.error("❌ Failed to install Prettier and ESLint:", error);
    }
    throw error;
  }
}

export default installPrettierAndESLint;
