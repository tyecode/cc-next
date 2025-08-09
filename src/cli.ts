#!/usr/bin/env node

import { Command } from "commander";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import main from "./main.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJsonPath = join(__dirname, "../package.json");
const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
const version = packageJson.version;

const program = new Command();

program
  .version(version, "-v, --version", "Output the current version")
  .description("🚀 CLI tool to create a Next.js project with TypeScript, Tailwind CSS, and enterprise-grade tooling")
  .option(
    "-t, --template <template>",
    "Use a specific template: 'basic' for minimal setup, 'advanced' for enterprise features (default: basic)",
    "basic"
  )
  .option("-i, --interactive", "Run in interactive mode with detailed prompts and feature explanations")
  .option("-d, --dry-run", "Show what would be created without making any changes - perfect for previewing")
  .addHelpText('after', `

Examples:
  $ npx @tyecode/cc-next                     # Basic setup with prompts
  $ npx @tyecode/cc-next -i                  # Interactive mode with detailed explanations
  $ npx @tyecode/cc-next -t advanced         # Use advanced template with enterprise tools
  $ npx @tyecode/cc-next -d                  # Preview what would be created
  $ npx @tyecode/cc-next -t basic -d         # Preview basic template setup

Templates:
  basic     - Minimal Next.js setup with TypeScript and Tailwind CSS
  advanced  - Enterprise setup with Husky, Jest, Storybook, and CI/CD

For more information, visit: https://github.com/tyecode/cc-next`)
  .action((options) => {
    main(options).catch((error) => {
      console.error("❌ An error occurred during setup:", error);
      process.exit(1);
    });
  });

program.parse(process.argv);
