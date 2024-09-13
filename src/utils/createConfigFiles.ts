import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

function createConfigFiles({ projectName }: { projectName: string }) {
  const projectRoot = join(process.cwd(), projectName);
  const vscodeDir = join(projectRoot, ".vscode");

  if (!existsSync(projectRoot)) {
    mkdirSync(projectRoot, { recursive: true });
  }

  if (!existsSync(vscodeDir)) {
    mkdirSync(vscodeDir, { recursive: true });
  }

  console.log("🔧 Creating Prettier and ESLint configuration files...");

  writeFileSync(
    join(projectRoot, ".prettierrc.json"),
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

  writeFileSync(
    join(projectRoot, ".eslintrc.json"),
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

  writeFileSync(
    join(vscodeDir, "settings.json"),
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

  console.log(
    "✅ Prettier and ESLint configuration files created successfully."
  );
}

export default createConfigFiles;
