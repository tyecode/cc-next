#!/usr/bin/env node

const { execSync } = require("child_process");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Questions for setup
const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your Next.js project?",
    default: "my-next-app",
  },
  {
    type: "list",
    name: "packageManager",
    message: "Which package manager would you like to use?",
    choices: ["npm", "yarn", "pnpm"],
    default: "npm",
  },
];

const vscodeDir = path.join(__dirname, ".vscode");
if (!fs.existsSync(vscodeDir)) {
  fs.mkdirSync(vscodeDir);
}

// Run the setup process
inquirer.prompt(questions).then((answers) => {
  // Create Next.js app
  console.log(`Creating Next.js project: ${answers.projectName}`);
  if (answers.packageManager === "yarn") {
    execSync(
      `yarn create next-app ${answers.projectName} --typescript --tailwind --no-eslint --app --src-dir --import-alias '@/*'`,
      { stdio: "inherit" }
    );
  } else if (answers.packageManager === "pnpm") {
    execSync(
      `pnpm create next-app ${answers.projectName} --ts --tailwind --no-eslint --app --src-dir --import-alias '@/*'`,
      { stdio: "inherit" }
    );
  } else {
    execSync(
      `npx create-next-app@latest ${answers.projectName} --ts --tailwind --no-eslint --app --src-dir --import-alias '@/*'`,
      { stdio: "inherit" }
    );
  }

  // Change directory to the project folder
  process.chdir(answers.projectName);

  // Install Prettier and ESLint
  console.log("Installing Prettier and ESLint...");
  if (answers.packageManager === "yarn") {
    execSync(
      `yarn add --dev prettier eslint eslint-plugin-prettier eslint-config-prettier prettier-plugin-tailwindcss`,
      { stdio: "inherit" }
    );
  } else if (answers.packageManager === "pnpm") {
    execSync(
      `pnpm add -D prettier eslint eslint-plugin-prettier eslint-config-prettier prettier-plugin-tailwindcss`,
      { stdio: "inherit" }
    );
  } else {
    execSync(
      `npm install -D prettier eslint eslint-plugin-prettier eslint-config-prettier prettier-plugin-tailwindcss`,
      { stdio: "inherit" }
    );
  }

  // Create Prettier & ESLint configuration file
  console.log("Creating Prettier and ESLint configuration file...");
  fs.writeFileSync(
    ".prettierrc.json",
    JSON.stringify(
      {
        $schema: "https://json.schemastore.org/prettierrc",
        singleQuote: false,
        trailingComma: "all",
        semi: true,
        bracketSpacing: true,
        tabWidth: 2,
        printWidth: 100,
        plugins: ["prettier-plugin-tailwindcss"],
      },
      null,
      2
    )
  );

  fs.writeFileSync(
    ".eslintrc.json",
    JSON.stringify(
      {
        extends: [
          "next/core-web-vitals",
          "next/typescript",
          "plugin:prettier/recommended",
        ],
      },
      null,
      2
    )
  );

  // Create VSCode settings file
  fs.writeFileSync(
    path.join(vscodeDir, "settings.json"),
    JSON.stringify(
      {
        "editor.codeActionsOnSave": {
          "source.fixAll.eslint": "explicit",
        },
      },
      null,
      2
    )
  );

  // Read package.json
  const packageJsonPath = path.join(process.cwd(), "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  // Add scripts to package.json
  packageJson.scripts = {
    ...packageJson.scripts,
    format: "prettier --check --ignore-path .gitignore .",
    "format:fix": "prettier --write --ignore-path .gitignore .",
  };

  // Write updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // Install clsx and tailwind-merge package
  console.log("Installing clsx and tailwind-merge package...");
  if (answers.packageManager === "yarn") {
    execSync(`yarn add clsx tailwind-merge`, { stdio: "inherit" });
  } else if (answers.packageManager === "pnpm") {
    execSync(`pnpm add clsx tailwind-merge`, { stdio: "inherit" });
  } else {
    execSync(`npm install clsx tailwind-merge`, { stdio: "inherit" });
  }

  // Create src/utils/cn.ts file
  const utilsDir = path.join(process.cwd(), "src/utils");
  if (!fs.existsSync(utilsDir)) {
    fs.mkdirSync(utilsDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(utilsDir, "cn.ts"),
    `import { ClassValue, clsx } from "clsx";\n`
  );
  fs.appendFileSync(
    path.join(utilsDir, "cn.ts"),
    `import { twMerge } from "tailwind-merge";\n\n`
  );
  fs.appendFileSync(
    path.join(utilsDir, "cn.ts"),
    `export const cn = (...inputs: ClassValue[]) => {\n\treturn twMerge(clsx(inputs));\n};`
  );

  // Create src/components directory
  const componentsDir = path.join(process.cwd(), "src/components");
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  // Create src/hooks directory
  const hooksDir = path.join(process.cwd(), "src/hooks");
  if (!fs.existsSync(hooksDir)) {
    fs.mkdirSync(hooksDir, { recursive: true });
  }

  console.log("\n🎉 Setup complete! Your project is ready.");
});
