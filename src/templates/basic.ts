import { TemplateConfig } from "../types.js";

export const basicTemplate: TemplateConfig = {
  name: "basic",
  description: "A minimal Next.js setup with TypeScript and Tailwind CSS",
  features: [
    "Next.js 14 with App Router",
    "TypeScript configuration",
    "Tailwind CSS with basic config",
    "ESLint and Prettier",
    "Basic folder structure"
  ],
  additionalPackages: [
    "clsx",
    "tailwind-merge"
  ],
  devDependencies: [],
  scripts: {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  },
  directories: [
    "src/components",
    "src/utils"
  ],
  configFiles: [
    ".prettierrc.json",
    ".eslintrc.json"
  ]
};