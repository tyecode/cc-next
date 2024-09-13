import { execa } from "execa";

const installCommands: Record<string, string[]> = {
  npm: ["npm", "install", "clsx", "tailwind-merge"],
  yarn: ["yarn", "add", "clsx", "tailwind-merge"],
  pnpm: ["pnpm", "add", "clsx", "tailwind-merge"],
};

export interface InstallOptions {
  packageManager: string;
  projectName: string;
}

export async function installAdditionalPackages({
  packageManager,
  projectName,
}: InstallOptions): Promise<void> {
  try {
    console.log("⚙️  Installing clsx and tailwind-merge...");

    const command = installCommands[packageManager];
    if (!command) {
      throw new Error("Unsupported package manager.");
    }

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
