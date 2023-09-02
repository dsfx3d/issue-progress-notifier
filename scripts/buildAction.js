const esbuild = require("esbuild");

esbuild.buildSync({
  entryPoints: ["./action/bin.ts"],
  bundle: true,
  outfile: "bin.js",
  platform: "node",
  target: "node16",
  minify: true,
  sourcemap: false,
  logLevel: "error",
  loader: {
    ".css": "text",
  },
});
