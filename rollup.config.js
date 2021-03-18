import { nodeResolve } from "@rollup/plugin-node-resolve";
import html from "@web/rollup-plugin-html";
import { importMetaAssets } from "@web/rollup-plugin-import-meta-assets";
import sourcemaps from "rollup-plugin-sourcemaps";

export default {
  input: "./index.html",
  output: {
    dir: "dist",
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    sourcemaps(),
    html(),
    importMetaAssets(), // TODO commenting out this plugin fixes sourcemaps for npm run start:build
  ],
};
