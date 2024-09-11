import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

function createUtilityFiles({ projectName }: { projectName: string }) {
  const utilsDir = join(process.cwd(), projectName, "src", "utils");

  // Ensure the utils directory exists
  if (!existsSync(utilsDir)) {
    mkdirSync(utilsDir, { recursive: true });
  }

  // Template string with indented code
  const cnFileContent = `
    import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";

    export const cn = (...inputs: ClassValue[]) => {
      return twMerge(clsx(inputs));
    };
  `;

  // Remove leading indentation
  const formattedContent = cnFileContent
    .split("\n")
    .map((line) => line.trim())
    .join("\n");

  // Write the content to cn.ts
  writeFileSync(join(utilsDir, "cn.ts"), formattedContent);
}

export default createUtilityFiles;
