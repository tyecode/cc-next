import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

function createUtilityFiles({ projectName }: { projectName: string }) {
  const utilsDir = join(process.cwd(), projectName, "src", "utils");

  if (!existsSync(utilsDir)) {
    mkdirSync(utilsDir, { recursive: true });
  }

  const cnFileContent = `
    import { ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";

    export const cn = (...inputs: ClassValue[]) => {
      return twMerge(clsx(inputs));
    };
  `;

  const formattedContent = cnFileContent
    .split("\n")
    .map((line) => line.trim())
    .join("\n");

  writeFileSync(join(utilsDir, "cn.ts"), formattedContent);
}

export default createUtilityFiles;
