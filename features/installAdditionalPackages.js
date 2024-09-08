import { execSync } from "child_process";

function installAdditionalPackages(packageManager) {
  console.log("Installing clsx and tailwind-merge package...");
  const command = {
    yarn: `yarn add clsx tailwind-merge`,
    pnpm: `pnpm add clsx tailwind-merge`,
    npm: `npm install clsx tailwind-merge`,
  }[packageManager];
  execSync(command, { stdio: "inherit" });
}

export default installAdditionalPackages;
