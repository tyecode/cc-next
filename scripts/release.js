#!/usr/bin/env node

import { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJsonPath = join(__dirname, "../package.json");

function updateVersion(releaseType = "patch") {
  console.log(`🚀 Creating ${releaseType} release...`);

  // Read current package.json
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
  const currentVersion = packageJson.version;

  console.log(`📦 Current version: ${currentVersion}`);

  // Parse version
  const [major, minor, patch] = currentVersion.split(".").map(Number);

  // Calculate new version
  let newVersion;
  switch (releaseType) {
    case "major":
      newVersion = `${major + 1}.0.0`;
      break;
    case "minor":
      newVersion = `${major}.${minor + 1}.0`;
      break;
    case "patch":
    default:
      newVersion = `${major}.${minor}.${patch + 1}`;
      break;
  }

  console.log(`📦 New version: ${newVersion}`);

  // Update package.json
  packageJson.version = newVersion;
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");

  console.log("✅ Updated package.json");

  return newVersion;
}

function createRelease(version) {
  try {
    console.log("🔨 Building project...");
    execSync("pnpm run build", { stdio: "inherit" });

    console.log("🧪 Running tests...");
    execSync("pnpm test", { stdio: "inherit" });

    console.log("📝 Committing version bump...");
    execSync("git add package.json", { stdio: "inherit" });
    execSync(`git commit -m "chore(release): v${version}"`, {
      stdio: "inherit",
    });

    console.log("🏷️ Creating git tag...");
    execSync(`git tag -a v${version} -m "Release v${version}"`, {
      stdio: "inherit",
    });

    console.log("📤 Pushing to GitHub...");
    execSync("git push origin HEAD", { stdio: "inherit" });
    execSync(`git push origin v${version}`, { stdio: "inherit" });

    console.log(`🎉 Release v${version} created successfully!`);
    console.log(
      `📋 Create GitHub release manually at: https://github.com/tyecode/cc-next/releases/new?tag=v${version}`
    );
  } catch (error) {
    console.error("❌ Release failed:", error.message);
    process.exit(1);
  }
}

// Get release type from command line argument
const releaseType = process.argv[2] || "patch";

if (!["patch", "minor", "major"].includes(releaseType)) {
  console.error("❌ Invalid release type. Use: patch, minor, or major");
  process.exit(1);
}

const newVersion = updateVersion(releaseType);
createRelease(newVersion);
