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

detect.detect(runNr, process__default.argv.slice(2).filter(Boolean));
async function runNr(option) {
  const { command, args } = option;
  let lbArgs = ["run", "build", ...args];
  await tinyexec.x(command, lbArgs, {
    nodeOptions: {
      stdio: "inherit"
    },
    throwOnError: true
  });
}
