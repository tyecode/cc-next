import { existsSync, mkdirSync } from "fs";
import { join } from "path";
import { TemplateConfig } from "../types.js";

function createDirectories({ projectName, template }: { projectName: string; template: TemplateConfig }) {
  console.log("📁 Creating project directories...");
  
  const projectRoot = join(process.cwd(), projectName);
  const directories = template.directories.map(dir => join(projectRoot, dir));

  directories.forEach((dir) => {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
      console.log(`  ✓ Created ${dir.replace(projectRoot + "/", "")}/`);
    }
  });
  
  console.log("✅ Project directories created successfully.");
}

export default createDirectories;
