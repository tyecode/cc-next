import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { TemplateConfig } from "../types.js";

function updatePackageJson({ projectName, template }: { projectName: string; template: TemplateConfig }) {
  console.log("📝 Updating package.json with template scripts...");
  
  const packageJsonPath = join(process.cwd(), projectName, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));

  // Merge template scripts with existing scripts
  packageJson.scripts = {
    ...packageJson.scripts,
    ...template.scripts,
  };

  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log("✅ Package.json updated successfully.");
}

export default updatePackageJson;
