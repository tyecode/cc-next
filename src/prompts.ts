import inquirer from "inquirer";
import { CLIOptions, ProjectConfig } from "./types.js";
import { listTemplates } from "./templates/index.js";

export async function selectPackageManager(): Promise<string> {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "packageManager",
      message: "Which package manager would you like to use?",
      choices: ["npm", "yarn", "pnpm"],
      default: "npm",
    },
  ]);

  return answers.packageManager;
}

export async function promptPackageManager(): Promise<"npm" | "yarn" | "pnpm"> {
  const packageManager = await selectPackageManager();
  const validPackageManagers: Set<string> = new Set(["npm", "yarn", "pnpm"]);

  if (!validPackageManagers.has(packageManager)) {
    throw new Error(`Invalid package manager selected: ${packageManager}`);
  }

  return packageManager as "npm" | "yarn" | "pnpm";
}

export async function promptProjectName(): Promise<string> {
  const { projectName } = await inquirer.prompt<{ projectName: string }>({
    type: "input",
    name: "projectName",
    message: "Enter the name of your Next.js project:",
    default: "my-next-app",
  });
  return projectName;
}

export async function promptTemplate(): Promise<"basic" | "advanced"> {
  const templates = listTemplates();
  const choices = templates.map(template => ({
    name: `${template.name} - ${template.description}`,
    value: template.name,
    short: template.name
  }));

  const { template } = await inquirer.prompt<{ template: "basic" | "advanced" }>({
    type: "list",
    name: "template",
    message: "Which project template would you like to use?",
    choices,
    default: "basic",
  });

  return template;
}

export async function promptInteractiveConfig(options: CLIOptions): Promise<ProjectConfig> {
  console.log("\n🔧 Interactive setup mode - Let's configure your project step by step!\n");

  // Show template details if interactive
  if (options.interactive) {
    const templates = listTemplates();
    console.log("📋 Available templates:");
    templates.forEach(template => {
      console.log(`\n  ${template.name.toUpperCase()}:`);
      console.log(`  ${template.description}`);
      console.log(`  Features: ${template.features.slice(0, 3).join(", ")}${template.features.length > 3 ? "..." : ""}`);
    });
    console.log("");
  }

  const packageManager = await promptPackageManager();
  const projectName = await promptProjectName();
  const template = options.template || await promptTemplate();

  // Interactive mode provides more detailed configuration
  if (options.interactive) {
    const { confirmAdvanced } = await inquirer.prompt<{ confirmAdvanced: boolean }>({
      type: "confirm",
      name: "confirmAdvanced",
      message: `You selected "${template}" template. Would you like to see the full feature list?`,
      default: false,
    });

    if (confirmAdvanced) {
      const selectedTemplate = listTemplates().find(t => t.name === template);
      if (selectedTemplate) {
        console.log(`\n📦 ${selectedTemplate.name.toUpperCase()} template includes:`);
        selectedTemplate.features.forEach(feature => console.log(`  ✓ ${feature}`));
        console.log("");
      }
    }
  }

  return {
    packageManager,
    projectName,
    template,
    interactive: !!options.interactive,
    dryRun: !!options.dryRun
  };
}
