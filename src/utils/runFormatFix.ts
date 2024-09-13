import { execa } from "execa";
import { join } from "path";

async function runFormatFix({ projectName }: { projectName: string }) {
  const projectPath = join(process.cwd(), projectName);

  try {
    console.log("🔧 Running format:fix script...");
    await execa("npm", ["run", "format:fix"], {
      cwd: projectPath,
      stdio: "inherit",
    });
    console.log("✅ Code formatted successfully.");
  } catch (error) {
    console.error("❌ Failed to format code:", error);
    throw error;
  }
}

export default runFormatFix;
