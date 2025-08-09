export interface CLIOptions {
  template?: "basic" | "advanced";
  interactive?: boolean;
  dryRun?: boolean;
}

export interface ProjectConfig {
  packageManager: "npm" | "yarn" | "pnpm";
  projectName: string;
  template: "basic" | "advanced";
  interactive: boolean;
  dryRun: boolean;
}

export interface TemplateConfig {
  name: string;
  description: string;
  features: string[];
  additionalPackages: string[];
  devDependencies: string[];
  scripts: Record<string, string>;
  directories: string[];
  configFiles: string[];
}