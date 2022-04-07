"use strict";

const childProcess = require("child_process");
const path = require("path");
const localNpmBinPath = path.join(
  __dirname,
  "./node_modules/npm/bin/npm-cli.js"
);

console.log("RUN", "node", [
  localNpmBinPath,
  "install",
  "--no-save",
  "es5-ext",
]);
childProcess.spawn(
  "node",
  [localNpmBinPath, "install", "--no-save", "es5-ext"],
  {
    stdio: "inherit",
  }
);
