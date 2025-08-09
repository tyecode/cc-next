import { ProjectConfig } from "../types.js";
import { getTemplate } from "../templates/index.js";

export function showDryRunPreview(config: ProjectConfig): void {
  console.log("\n🔍 DRY RUN MODE - Preview of what would be created:\n");
  
  const template = getTemplate(config.template);
  
  console.log(`📋 Project Configuration:`);
  console.log(`  Name: ${config.projectName}`);
  console.log(`  Package Manager: ${config.packageManager}`);
  console.log(`  Template: ${config.template} (${template.description})`);
  console.log(`  Interactive Mode: ${config.interactive ? "Yes" : "No"}`);
  
  console.log(`\n📁 Directories that would be created:`);
  console.log(`  ${config.projectName}/`);
  template.directories.forEach(dir => {
    console.log(`  ${config.projectName}/${dir}/`);
  });
  
  console.log(`\n📄 Configuration files that would be created:`);
  template.configFiles.forEach(file => {
    console.log(`  ${config.projectName}/${file}`);
  });
  
  console.log(`\n📦 Packages that would be installed:`);
  console.log(`  Dependencies:`);
  template.additionalPackages.forEach(pkg => {
    console.log(`    - ${pkg}`);
  });
  
  if (template.devDependencies.length > 0) {
    console.log(`  Dev Dependencies:`);
    template.devDependencies.forEach(pkg => {
      console.log(`    - ${pkg}`);
    });
  }
  
  console.log(`\n📜 NPM scripts that would be added:`);
  Object.entries(template.scripts).forEach(([name, command]) => {
    console.log(`  ${name}: ${command}`);
  });
  
  console.log(`\n✨ Features included:`);
  template.features.forEach(feature => {
    console.log(`  ✓ ${feature}`);
  });
  
  console.log(`\n🔧 Setup process that would run:`);
  console.log(`  1. Install Next.js with TypeScript and Tailwind CSS`);
  console.log(`  2. Install and configure Prettier and ESLint`);
  console.log(`  3. Install additional packages: ${template.additionalPackages.join(", ")}`);
  if (template.devDependencies.length > 0) {
    console.log(`  4. Install dev dependencies: ${template.devDependencies.join(", ")}`);
  }
  console.log(`  5. Create project directories`);
  console.log(`  6. Generate configuration files`);
  console.log(`  7. Create utility files (cn.ts)`);
  console.log(`  8. Update package.json with scripts`);
  console.log(`  9. Run formatting and linting`);
  
  console.log(`\n💡 To actually create this project, run the command without --dry-run flag.`);
  console.log(`\n🚫 DRY RUN COMPLETE - No files were created or modified.\n`);
}

export function showFilePreview(filePath: string, content: string): void {
  console.log(`\n📄 Preview of ${filePath}:`);
  console.log("─".repeat(50));
  console.log(content.split('\n').slice(0, 10).join('\n'));
  if (content.split('\n').length > 10) {
    console.log("...");
    console.log(`(${content.split('\n').length - 10} more lines)`);
  }
  console.log("─".repeat(50));
}

export default showDryRunPreview;