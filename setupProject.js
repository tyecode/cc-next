import createNextJsProject from "./features/createNextJsProject.js";
import installPrettierAndESLint from "./features/installPrettierAndESLint.js";
import createConfigFiles from "./features/createConfigFiles.js";
import updatePackageJson from "./features/updatePackageJson.js";
import installAdditionalPackages from "./features/installAdditionalPackages.js";
import createUtilityFiles from "./features/createUtilityFiles.js";
import createDirectories from "./features/createDirectories.js";
import initializeGitRepository from "./features/initializeGitRepository.js";

export default function setupProject({ projectName, packageManager }) {
  if (!projectName) {
    throw new Error("Project name is required");
  }

  console.log(`Creating Next.js project: ${projectName}`);

  createNextJsProject({ projectName, packageManager });
  process.chdir(projectName);
  installPrettierAndESLint(packageManager);
  createConfigFiles();
  updatePackageJson();
  installAdditionalPackages(packageManager);
  createUtilityFiles();
  createDirectories();
  initializeGitRepository();

  console.log("\n🎉 Setup complete! Your project is ready.");
}
