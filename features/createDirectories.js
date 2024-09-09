import { existsSync, mkdirSync } from "fs";
import { join } from "path";

function createDirectories() {
  const componentsDir = join(process.cwd(), "src/components");
  if (!existsSync(componentsDir)) {
    mkdirSync(componentsDir, { recursive: true });
  }

  const hooksDir = join(process.cwd(), "src/hooks");
  if (!existsSync(hooksDir)) {
    mkdirSync(hooksDir, { recursive: true });
  }
}

export default createDirectories;
