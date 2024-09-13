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
  .description("CLI tool to set up a new Next.js project")
  .action(() => {
    main().catch((error) => {
      console.error("❌ An error occurred during setup:", error);
      process.exit(1);
    });
  });

program.parse(process.argv);
