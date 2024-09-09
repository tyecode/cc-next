import { execSync } from "child_process";

function installPrettierAndESLint(packageManager) {
  console.log("Installing Prettier and ESLint...");
  const command = {
    yarn: `yarn add --dev prettier eslint eslint-plugin-prettier eslint-config-prettier prettier-plugin-tailwindcss`,
    pnpm: `pnpm add -D prettier eslint eslint-plugin-prettier eslint-config-prettier prettier-plugin-tailwindcss`,
    npm: `npm install -D prettier eslint eslint-plugin-prettier eslint-config-prettier prettier-plugin-tailwindcss`,
  }[packageManager];
  execSync(command, { stdio: "inherit" });
}

export default installPrettierAndESLint;
