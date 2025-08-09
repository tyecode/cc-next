import { TemplateConfig } from "../types.js";
import { basicTemplate } from "./basic.js";
import { advancedTemplate } from "./advanced.js";

export const templates: Record<string, TemplateConfig> = {
  basic: basicTemplate,
  advanced: advancedTemplate
};

export function getTemplate(templateName: string): TemplateConfig {
  const template = templates[templateName];
  if (!template) {
    throw new Error(`Template "${templateName}" not found. Available templates: ${Object.keys(templates).join(", ")}`);
  }
  return template;
}

export function listTemplates(): TemplateConfig[] {
  return Object.values(templates);
}

export { basicTemplate, advancedTemplate };