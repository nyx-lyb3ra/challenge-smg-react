import stylex from "@stylexjs/eslint-plugin";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs["recommended-latest"],
  prettierRecommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "@stylexjs": stylex,
    },
    rules: {
      "@stylexjs/no-legacy-contextual-styles": "error",
      "@stylexjs/no-unused": "error",
      "@stylexjs/sort-keys": "error",
      "@stylexjs/valid-shorthands": "error",
      "@stylexjs/valid-styles": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-require-imports": [
        "error",
        {
          allowAsImport: true,
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
);
