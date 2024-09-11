import { existsSync, mkdirSync } from "fs";
import { join } from "path";

function createDirectories({ projectName }: { projectName: string }) {
  const directories = [
    join(process.cwd(), projectName, "src", "components"),
    join(process.cwd(), projectName, "src", "hooks"),
  ];

  directories.forEach((dir) => {
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
  });
}

export default createDirectories;
