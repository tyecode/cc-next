import { execa } from "execa";

const createNextAppCommands: Record<string, string[]> = {
  npm: [
    "npx",
    "create-next-app@latest",
    "--typescript",
    "--tailwind",
    "--no-eslint",
    "--app",
    "--src-dir",
    "--import-alias",
    "@/*",
    "--use-npm",
  ],
  yarn: [
    "yarn",
    "create",
    "next-app",
    "--typescript",
    "--tailwind",
    "--no-eslint",
    "--app",
    "--src-dir",
    "--import-alias",
    "@/*",
  ],
  pnpm: [
    "pnpm",
    "create",
    "next-app",
    "--typescript",
    "--tailwind",
    "--no-eslint",
    "--app",
    "--src-dir",
    "--import-alias",
    "@/*",
  ],
};

export interface InstallOptions {
  packageManager: string;
  projectName: string;
}

export async function installNext({
  packageManager,
  projectName,
}: InstallOptions): Promise<void> {
  try {
    console.log("⚙️  Installing Next.js with TypeScript...");

    const command = createNextAppCommands[packageManager];
    if (!command) {
      throw new Error("Unsupported package manager.");
    }

    const commandWithProjectName = [...command, projectName];

    await execa(commandWithProjectName[0], commandWithProjectName.slice(1), {
      stdio: "inherit",
    });

    console.log("✅ Next.js installed successfully.");
  } catch (error) {
    if (error instanceof Error) {
      console.error("❌ Failed to install Next.js:", error.message);
    } else {
      console.error("❌ Failed to install Next.js:", error);
    }
    throw error;
  }
}

export default installNext;
