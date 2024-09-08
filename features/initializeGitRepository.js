import { execSync } from "child_process";

export default function initializeGitRepository() {
  try {
    execSync("git init --initial-branch=main", { stdio: "inherit" });
    execSync("git add .", { stdio: "inherit" });
    execSync(
      'git commit -m "feat: initial project setup with base configuration"',
      {
        stdio: "inherit",
      }
    );
  } catch (error) {
    console.error(
      "\n❌ Failed to initialize Git repository or make the initial commit.",
      error
    );
  }
}
