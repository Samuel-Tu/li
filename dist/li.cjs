#! /usr/bin/env node
'use strict';

const detect = require('./shared/li.99928109.cjs');
const process = require('node:process');
const tinyexec = require('tinyexec');
require('package-manager-detector');
require('which');
require('@posva/prompts');
require('picocolors');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const process__default = /*#__PURE__*/_interopDefaultCompat(process);

detect.detect(runNi, process__default.argv.slice(2).filter(Boolean));
async function runNi(option) {
  const { command, args } = option;
  let liArgs = [];
  const oIndex = args.indexOf("-o");
  if (oIndex >= 0)
    args[oIndex] = "--prefer-offline";
  liArgs = ["i", ...args];
  await tinyexec.x(command, liArgs, {
    nodeOptions: {
      stdio: "inherit"
    },
    throwOnError: true
  });
}
