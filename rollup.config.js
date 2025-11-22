import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.tsx",
  output: [
    { file: "dist/index.cjs.js", format: "cjs", sourcemap: true },
    { file: "dist/index.esm.js", format: "esm", sourcemap: true },
  ],
  external: ["react", "react-dom", "tslib"],
  plugins: [
    postcss({
      extract: "oneui.css",
      minimize: true,
      modules: false,
      plugins: [],
    }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
  ],
};
