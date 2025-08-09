# tyecode/cc-next

This is a TypeScript-based CLI tool that automates the setup of a Next.js project with TypeScript, Tailwind CSS, Prettier, and ESLint. It allows users to select their preferred package manager and handles all necessary configurations, including setting up Prettier and ESLint with Tailwind CSS formatting, creating essential directories, and installing helpful packages like clsx and tailwind-merge.

## Contents

- [**Feature**](#feature)
- [**Getting Started**](#getting-started)
- [**Usage**](#usage)
- [**Project Structure**](#project-structure)
- [**Dependencies**](#dependencies)
- [**Configuration**](#configuration)
- [**Contributing**](#contributing)
- [**License**](#license)

## Feature

- **Automated Next.js Project Setup:** Quickly set up a new Next.js project with TypeScript and Tailwind CSS.
- **TypeScript-First Development:** Built with TypeScript for improved type safety and maintainability.
- **Customizable Package Manager:** Choose between npm, yarn, or pnpm as your preferred package manager.
- **Prettier and ESLint Configuration:** Prettier and ESLint are installed and configured with rules tailored for Tailwind CSS.
- **Utilities:** Installs clsx and tailwind-merge for optimized class management in Tailwind CSS.
- **CLI Options:** Includes version checking and other command-line utilities for enhanced developer experience.

## Getting Started

You can use `npx` to run the setup script without cloning the repository.

1. Run the following command:

```bash
npx @tyecode/cc-next
```

2. Follow the prompts to specify your project name and select a package manager.

> This will automatically set up your Next.js project and install all necessary configurations, including TypeScript, Tailwind CSS, Prettier, and ESLint.

## Usage

### Basic Usage

When you run the CLI tool, you will be prompted with the following questions:

1. **Package Manager**: Select the package manager you'd like to use: `npm`, `yarn`, or `pnpm`.
2. **Project Name**: The name of your Next.js project (default: my-next-app).

Based on your input, the tool will:

- Create a new Next.js project using the selected package manager.
- Set up TypeScript, Tailwind CSS, and various project structure elements.
- Install Prettier and ESLint, along with the necessary plugins and configuration files.
- Install utility packages (clsx, tailwind-merge).
- Create essential directories (components, hooks, utils).
- Run formatting and linting to ensure code quality.

### CLI Options

```bash
# Display version information
npx @tyecode/cc-next --version

# Get help information
npx @tyecode/cc-next --help
```

## Project Structure

The CLI tool creates the following project structure:

```
my-next-app/
├── src/
│   ├── app/              # Next.js app directory (App Router)
│   ├── components/       # Directory for React components
│   ├── hooks/            # Directory for custom React hooks
│   └── utils/
│       └── cn.ts         # Utility for managing Tailwind CSS classes
├── .eslintrc.json        # ESLint configuration file
├── .prettierrc.json      # Prettier configuration file
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and scripts
```

## Dependencies

The following dependencies are installed during the setup process:

### Core Dependencies

- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools

- **Prettier** - Code formatter with Tailwind CSS plugin
- **ESLint** - Linting utility for JavaScript/TypeScript
- **prettier-plugin-tailwindcss** - Automatic class sorting for Tailwind CSS

### Utility Libraries

- **clsx** - Utility for constructing className strings conditionally
- **tailwind-merge** - Utility for merging Tailwind CSS classes without style conflicts

## Development

This project is built with TypeScript and includes modern development tooling:

- **TypeScript** for type safety and better developer experience
- **ESLint** for code quality and consistency
- **Prettier** with Tailwind CSS plugin for automated formatting
- **Jest** for unit testing
- **Rollup** for efficient bundling

## Configuration

### Prettier Configuration `.prettierrc.json`

```json
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "singleQuote": false,
  "trailingComma": "all",
  "semi": true,
  "bracketSpacing": true,
  "tabWidth": 2,
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### ESLint Configuration `.eslintrc.json`

```json
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended"
  ]
}
```

## Contributing

Contributions are welcome, and this project is a great starting point for anyone looking to get involved in open-source development. Whether you’re new to contributing or a seasoned developer, your input is valued!

Please read the [Contributing guideline](https://github.com/tyecode/cc-next/blob/main/CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/tyecode/cc-next/blob/main/LICENSE) file for details.
