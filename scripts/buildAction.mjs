import {buildSync} from "esbuild";

buildSync({
  entryPoints: ["bin.ts"],
  bundle: true,
  outfile: "action.js",
  platform: "node",
  target: "node16",
  minify: true,
  sourcemap: false,
  jsxFactory: "html",
  jsxFragment: "html",
  treeShaking: true,
  logLevel: "error",
  external: ["jsdom"],
});
