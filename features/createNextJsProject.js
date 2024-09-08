import { execSync } from "child_process";

function createNextJsProject(answers) {
  console.log(`Creating Next.js project: ${answers.projectName}`);
  const command = {
    yarn: `yarn create next-app ${answers.projectName} --typescript --tailwind --no-eslint --app --src-dir --import-alias '@/*'`,
    pnpm: `pnpm create next-app ${answers.projectName} --ts --tailwind --no-eslint --app --src-dir --import-alias '@/*'`,
    npm: `npx create-next-app@latest ${answers.projectName} --ts --tailwind --no-eslint --app --src-dir --import-alias '@/*'`,
  }[answers.packageManager];
  execSync(command, { stdio: "inherit" });
}

export default createNextJsProject;
