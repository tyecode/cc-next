# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2024-09-14

### Added
- **TypeScript Support**: Refactored the codebase to TypeScript for improved type safety and maintainability.
- **ESLint Integration**: Added ESLint configuration to enforce code quality and consistency.
- **Unit Tests**: Introduced unit tests to ensure functionality and facilitate future development.
- **New Command-Line Options**:
  - Added `--version` to display the current version.
  - Added `--test` for running project tests.
- **Automated Commit After Setup**: A new function now automatically commits initial changes after project setup.

### Changed
- **Code Structure**: Improved organization and maintainability by restructuring the project code.
- **Build Process**: Updated build scripts to accommodate TypeScript and ESLint.
- **Documentation**: README has been revised to reflect the latest changes and contributor guidelines.

### Notes
- This release focuses on enhancing code quality, usability, and the developer workflow.

## [1.1.2] - 2024-09-08

### Added
- **New Command-Line Options**:
  - Added `--version` to display the current version.
  - Added `--test` for running project tests.
- **Automated Commit After Setup**: A new function now automatically commits initial changes after project setup.

### Changed
- **Refactored Code Structure**: Improved organization and maintainability by restructuring project code.
- **Updated Documentation**: README has been revised to reflect the latest changes and contributor guidelines.

### Notes
- This release focuses on better code maintainability, enhanced usability, and improved developer workflow.

## [1.0.1] - 2024-09-09

### Changed
- **Package Metadata**: Updated `package.json` name for consistency and clarity.
- **Documentation**: Improved the `README.md` with clearer setup instructions and updated examples.

### Notes
- No functional changes to the codebase. This release focuses on improving developer experience and project organization.

## [1.0.0] - 2024-09-08

### Added
- **Automated Next.js Project Setup**: Easily set up a new Next.js project pre-configured with TypeScript and Tailwind CSS.
- **Customizable Package Manager**: Flexibly choose between npm, yarn, or pnpm as your preferred package manager during project initialization.
- **Prettier and ESLint Configuration**: Prettier and ESLint come pre-installed with custom rules tailored for Tailwind CSS, ensuring a clean and consistent code style.
- **Utilities for Class Management**: Includes `clsx` and `tailwind-merge` for optimized class management in Tailwind CSS, making it easier to handle dynamic and conditional class names.

### Notes
- This release streamlines the development process for Next.js projects, offering customization and out-of-the-box productivity.