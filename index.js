"use strict";

const spawn = require("child-process-ext/spawn");
const path = require("path");
const localNpmBinPath = path.join(
  __dirname,
  "./node_modules/npm/bin/npm-cli.js"
);

(async () => {
  console.log("RUN", "node", [
    localNpmBinPath,
    "install",
    "--no-save",
    "es5-ext",
  ]);
  await spawn("node", [localNpmBinPath, "install", "--no-save", "es5-ext"], {
    stdio: "inherit",
  });
})();
