import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

function updatePackageJson({ projectName }: { projectName: string }) {
  const packageJsonPath = join(process.cwd(), projectName, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));

  packageJson.scripts = {
    ...packageJson.scripts,
    format: "prettier --check --ignore-path .gitignore .",
    "format:fix": "prettier --write --ignore-path .gitignore .",
  };

  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

export default updatePackageJson;
