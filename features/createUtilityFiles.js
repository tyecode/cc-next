import { existsSync, mkdirSync, writeFileSync, appendFileSync } from "fs";
import { join } from "path";

function createUtilityFiles() {
  const utilsDir = join(process.cwd(), "src/utils");
  if (!existsSync(utilsDir)) {
    mkdirSync(utilsDir, { recursive: true });
  }

  writeFileSync(
    join(utilsDir, "cn.ts"),
    `import { ClassValue, clsx } from "clsx";\n`
  );
  appendFileSync(
    join(utilsDir, "cn.ts"),
    `import { twMerge } from "tailwind-merge";\n\n`
  );
  appendFileSync(
    join(utilsDir, "cn.ts"),
    `export const cn = (...inputs: ClassValue[]) => {\n\treturn twMerge(clsx(inputs));\n};`
  );
}

export default createUtilityFiles;
