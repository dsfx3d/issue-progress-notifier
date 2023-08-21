import {buildSync} from "esbuild";

buildSync({
  entryPoints: ["issue-notifier/bin.ts"],
  bundle: true,
  outfile: "action.js",
  platform: "node",
  target: "node16",
  minify: true,
  sourcemap: false,
  jsx: "transform",
});
