#!/usr/bin/env node

// Node.js v8+ only

"use strict";

require("essentials");

const path = require("path");
const spawn = require("child-process-ext/spawn");
const fse = require("fs-extra");

const spawnOptions = { stdio: "inherit" };

(async () => {
  process.stdout.write("Build binaries\n");
  await spawn(
    "node",
    [
      "./node_modules/.bin/pkg",
      "-c",
      "config.js",
      "--targets",
      "node16-linux-x64,node16-mac-x64,node16-win-x64",
      "--out-path",
      "dist",
      "index.js",
    ],
    spawnOptions
  );
})();
