import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import preserveShebang from "rollup-plugin-preserve-shebang";

export default {
  input: {
    cli: "src/cli.ts",
    main: "src/main.ts",
  },
  output: [
    {
      dir: "dist",
      format: "esm",
      entryFileNames: "[name].js",
      sourcemap: true,
    },
  ],
  plugins: [nodeResolve(), commonjs(), typescript(), json(), preserveShebang()],
  external: ["execa", "inquirer"],
};
