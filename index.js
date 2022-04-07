"use strict";

const spawn = require("child-process-ext/spawn");
const path = require("path");
const localNpmBinPath = path.join(
  __dirname,
  "./node_modules/npm/bin/npm-cli.js"
);

(async () => {
  await spawn("node", [localNpmBinPath, "install", "--no-save", "is-even"], {
    stdio: "inherit",
  });
})();
