import { TemplateConfig } from "../types.js";

export const advancedTemplate: TemplateConfig = {
  name: "advanced",
  description: "A comprehensive Next.js setup with enterprise-grade tooling",
  features: [
    "Next.js 14 with App Router",
    "TypeScript configuration",
    "Tailwind CSS with extended config",
    "ESLint and Prettier with advanced rules",
    "Husky git hooks",
    "Commitlint for conventional commits",
    "Jest testing setup",
    "Storybook for component development",
    "GitHub Actions CI/CD",
    "Component library structure",
    "Advanced folder structure"
  ],
  additionalPackages: [
    "clsx",
    "tailwind-merge",
    "@headlessui/react",
    "@heroicons/react",
    "framer-motion",
    "react-hook-form",
    "@hookform/resolvers",
    "zod"
  ],
  devDependencies: [
    "@testing-library/react",
    "@testing-library/jest-dom",
    "@testing-library/user-event",
    "jest-environment-jsdom",
    "@storybook/react",
    "@storybook/addon-essentials",
    "husky",
    "lint-staged",
    "@commitlint/cli",
    "@commitlint/config-conventional",
    "commitizen",
    "cz-conventional-changelog"
  ],
  scripts: {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "commit": "cz",
    "prepare": "husky"
  },
  directories: [
    "src/components/ui",
    "src/components/forms",
    "src/components/layout",
    "src/hooks",
    "src/utils",
    "src/lib",
    "src/types",
    "src/stores",
    "__tests__",
    ".storybook"
  ],
  configFiles: [
    ".prettierrc.json",
    ".eslintrc.json",
    "jest.config.js",
    ".storybook/main.ts",
    ".storybook/preview.ts",
    ".husky/pre-commit",
    ".husky/commit-msg",
    "commitlint.config.js",
    ".github/workflows/ci.yml"
  ]
};