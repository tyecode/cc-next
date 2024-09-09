import fs from "fs";
import setupProject from "../setupProject.js";

if (fs.existsSync("dist")) {
  fs.rmSync("dist", { recursive: true, force: true });
}

const testAnswers = {
  projectName: "dist",
  packageManager: "pnpm",
};

setupProject(testAnswers);
