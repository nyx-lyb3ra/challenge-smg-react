import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

const checkerConfig = {
  eslint: {
    lintCommand: "eslint .",
    useFlatConfig: true,
  },
  typescript: true,
};

const reactConfig = {
  babel: {
    babelrc: true,
    configFile: true,
  },
};

export default defineConfig({
  plugins: [checker(checkerConfig), react(reactConfig), tsconfigPaths()],
});
