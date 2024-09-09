import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

function createConfigFiles() {
  const vscodeDir = join(process.cwd(), ".vscode");
  if (!existsSync(vscodeDir)) {
    mkdirSync(vscodeDir);
  }

  console.log("Creating Prettier and ESLint configuration file...");

  writeFileSync(
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

  writeFileSync(
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
}

export default createConfigFiles;
