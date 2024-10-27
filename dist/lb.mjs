#! /usr/bin/env node
import { d as detect } from './shared/li.76af1f28.mjs';
import process from 'node:process';
import { x } from 'tinyexec';
import 'package-manager-detector';
import 'which';
import '@posva/prompts';
import 'picocolors';

detect(runNr, process.argv.slice(2).filter(Boolean));
async function runNr(option) {
  const { command, args } = option;
  let lbArgs = ["run", "build", ...args];
  await x(command, lbArgs, {
    nodeOptions: {
      stdio: "inherit"
    },
    throwOnError: true
  });
}
