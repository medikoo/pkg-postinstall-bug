#!/usr/bin/env node

"use strict";

const childProcess = require("child_process");

childProcess.spawn(
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
  { stdio: "inherit" }
);
