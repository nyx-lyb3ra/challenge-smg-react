import { join } from "node:path";

/** @type {import("@babel/core").TransformOptions} */
export default {
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        aliases: {
          "@/*": [join(import.meta.dirname, "src/*")],
        },
        dev: process.env.NODE_ENV === "development",
        runtimeInjection: false,
        styleResolution: "property-specificity",
        test: process.env.NODE_ENV === "test",
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: "commonJS",
        },
      },
    ],
  ],
  presets: [
    [
      "@babel/preset-react",
      {
        development: process.env.BABEL_ENV === "development",
        runtime: "automatic",
      },
    ],
    [
      "@babel/preset-typescript",
      {
        allowDeclareFields: true,
        onlyRemoveTypeImports: true,
        optimizeConstEnums: true,
        rewriteImportExtensions: true,
      },
    ],
  ],
};
