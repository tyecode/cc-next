import { execa } from "execa";

// Define a map of commands for each package manager
const installCommands: Record<string, string[]> = {
  npm: ["npm", "install", "clsx", "tailwind-merge"],
  yarn: ["yarn", "add", "clsx", "tailwind-merge"],
  pnpm: ["pnpm", "add", "clsx", "tailwind-merge"],
};

// Define the interface for the options
export interface InstallOptions {
  packageManager: "npm" | "yarn" | "pnpm";
  projectName: string;
}

export async function installAdditionalPackages({
  packageManager,
  projectName,
}: InstallOptions): Promise<void> {
  try {
    console.log("⚙️  Installing clsx and tailwind-merge...");

    // Get the command array based on the selected package manager
    const command = installCommands[packageManager];
    if (!command) {
      throw new Error("Unsupported package manager.");
    }

    // Execute the command
    await execa(command[0], command.slice(1), {
      stdio: "inherit",
      cwd: projectName,
    });

    console.log("✅ clsx and tailwind-merge installed successfully.");
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        "❌ Failed to install clsx and tailwind-merge:",
        error.message
      );
    } else {
      console.error("❌ Failed to install clsx and tailwind-merge:", error);
    }
    throw error;
  }
}

export default installAdditionalPackages;
