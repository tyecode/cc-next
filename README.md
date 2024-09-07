# tyecode/cc-next

This project is a Node.js script that automates the setup of a Next.js project with TypeScript, Tailwind CSS, Prettier, and ESLint. It allows the user to select their preferred package manager and handles all necessary configurations, including setting up Prettier and ESLint with Tailwind CSS formatting, creating essential directories, and installing helpful packages like clsx and tailwind-merge.

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
- **Customizable Package Manager:** Choose between npm, yarn, or pnpm as your preferred package manager.
- **Prettier and ESLint Configuration:** Prettier and ESLint are installed and configured with rules tailored for Tailwind CSS.
- **Utilities:** Installs clsx and tailwind-merge for optimized class management in Tailwind CSS.

## Getting Started

You can use `npx` to run the setup script without cloning the repository.

1. Run the following command:

```bash
npx @tyecode/cc-next
```

2. Follow the prompts to specify your project name and select a package manager.

> This will automatically set up your Next.js project and install all necessary configurations, including TypeScript, Tailwind CSS, Prettier, and ESLint.

## Usage

When you run the script, you will be prompted with the following questions:

1. Project Name: The name of your Next.js project (default: my-next-app).
2. Package Manager: Select the package manager you’d like to use `npm`, `yarn`, or `pnpm`.

Based on your input, the script will:

- Create a new Next.js project using the selected package manager.
- Set up TypeScript, Tailwind CSS, and various project structure elements.
- Install Prettier and ESLint, along with the necessary plugins and configuration files.
- Install utility packages (clsx, tailwind-merge).
- Create essential directories (src/components, src/hooks, src/utils).

## Project Structure

The script creates the following project structure:

```
my-next-app/
├── src/
│   ├── components/       # Directory for React components
│   ├── hooks/            # Directory for custom React hooks
│   └── utils/
│       └── cn.ts         # Utility for managing Tailwind CSS classes
├── .eslintrc.json        # ESLint configuration file
├── .prettierrc.json      # Prettier configuration file
└── package.json          # Project dependencies and scripts
```

## Dependencies

The following dependencies are installed during the setup process:

- Next.js
- TypeScript
- Tailwind CSS
- Prettier
- ESLint
- clsx
- tailwind-merge

## Configuration

Prettier Configuration `.prettierrc.json`

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

ESLint Configuration `.eslintrc.json`

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

To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

```bash
git checkout -b feature/my-new-feature
```

3. Make your changes and commit them:

```bash
git commit -m "feat: Add some feature"
```

4. Push the branch to your fork:

```bash
git push origin feature/my-new-feature
```

5. Open a pull request to the main repository.

Make sure your code adheres to the existing code style and includes relevant tests, if applicable. Contributions of all sizes are appreciated, and feel free to ask questions if needed.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/tyecode/cc-next/blob/main/LICENSE) file for details.