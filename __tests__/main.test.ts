import main from "../src/main";

import * as installNext from "../src/utils/installNext";
import * as createConfigFiles from "../src/utils/createConfigFiles";
import * as createUtilityFiles from "../src/utils/createUtilityFiles";
import * as installAdditionalPackages from "../src/utils/installAdditionalPackages";
import * as installPrettierAndESLint from "../src/utils/installPrettierAndESLint";
import * as updatePackageJson from "../src/utils/updatePackageJson";
import * as runFormatFix from "../src/utils/runFormatFix";
import * as createDirectories from "../src/utils/createDirectories";

import { promptProjectName, promptPackageManager } from "../src/prompts";

// Mock external dependencies
jest.mock("inquirer", () => ({
  prompt: jest.fn(),
}));

jest.mock("execa", () => ({
  execa: jest.fn(() => ({ stdout: "mocked output" })),
}));

// Mock utility functions
jest.mock("../src/prompts");
jest.mock("../src/utils/installNext");
jest.mock("../src/utils/createConfigFiles");
jest.mock("../src/utils/createUtilityFiles");
jest.mock("../src/utils/installAdditionalPackages");
jest.mock("../src/utils/installPrettierAndESLint");
jest.mock("../src/utils/updatePackageJson");
jest.mock("../src/utils/runFormatFix");
jest.mock("../src/utils/createDirectories");

describe("main setup script", () => {
  const packageManager = "pnpm";
  const projectName = "test-project";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should run the setup script and call utility functions", async () => {
    (promptProjectName as jest.Mock).mockResolvedValueOnce("test-project");
    (promptPackageManager as jest.Mock).mockResolvedValueOnce("pnpm");

    // Run the main setup script
    await main();

    // Verify that all utility functions were called with the correct arguments
    expect(promptProjectName).toHaveBeenCalledTimes(1);
    expect(promptPackageManager).toHaveBeenCalledTimes(1);
    expect(installNext.default).toHaveBeenCalledWith({
      packageManager,
      projectName,
    });
    expect(installPrettierAndESLint.default).toHaveBeenCalledWith({
      packageManager,
      projectName,
    });
    expect(installAdditionalPackages.default).toHaveBeenCalledWith({
      packageManager,
      projectName,
    });
    expect(createConfigFiles.default).toHaveBeenCalledWith({
      projectName,
    });
    expect(createUtilityFiles.default).toHaveBeenCalledWith({
      projectName,
    });
    expect(createDirectories.default).toHaveBeenCalledWith({
      projectName,
    });
    expect(updatePackageJson.default).toHaveBeenCalledWith({
      projectName,
    });
    expect(runFormatFix.default).toHaveBeenCalledWith({
      projectName,
    });
  });
});
