import inquirer from "inquirer";
import setupProject from "../setupProject.js";

const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your Next.js project?",
    default: "my-next-app",
  },
  {
    type: "list",
    name: "packageManager",
    message: "Which package manager would you like to use?",
    choices: ["npm", "yarn", "pnpm"],
    default: "npm",
  },
];

inquirer.prompt(questions).then((answers) => {
  setupProject(answers);
});
