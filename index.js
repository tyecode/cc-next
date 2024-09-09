#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Command } from "commander";
import { spawnSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJsonPath = path.resolve(__dirname, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
const { version, description } = packageJson;

// Create a new instance of Command
const program = new Command();

program.version("v" + version, "-v, --version").description(description);
program.option("--test", "Run the test setup script");
program.parse(process.argv);

const options = program.opts();
const scriptToRun = options.test
  ? path.resolve(__dirname, "scripts/setup.test.js")
  : path.resolve(__dirname, "scripts/setup.js");

if (!fs.existsSync(scriptToRun)) {
  console.error(`Error: Cannot find module '${scriptToRun}'`);
  process.exit(1);
}

spawnSync("node", [scriptToRun], { stdio: "inherit" });
