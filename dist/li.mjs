#! /usr/bin/env node
import { d as detect } from './shared/li.76af1f28.mjs';
import process from 'node:process';
import { x } from 'tinyexec';
import 'package-manager-detector';
import 'which';
import '@posva/prompts';
import 'picocolors';

detect(runNi, process.argv.slice(2).filter(Boolean));
async function runNi(option) {
  const { command, args } = option;
  let liArgs = [];
  const oIndex = args.indexOf("-o");
  if (oIndex >= 0)
    args[oIndex] = "--prefer-offline";
  liArgs = ["i", ...args];
  await x(command, liArgs, {
    nodeOptions: {
      stdio: "inherit"
    },
    throwOnError: true
  });
}
