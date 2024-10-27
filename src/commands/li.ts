#! /usr/bin/env node
import detect from "../detect";
import process from "node:process";
import { x } from "tinyexec";
import c from "picocolors";
import { runOption } from "./types";

detect(runNi, process.argv.slice(2).filter(Boolean));

async function runNi(option: runOption) {
  const { command, args } = option;
  let liArgs = [];

  const oIndex = args.indexOf("-o");
  if (oIndex >= 0) args[oIndex] = "--prefer-offline";

  liArgs = ["i", ...args];

  await x(command, liArgs, {
    nodeOptions: {
      stdio: "inherit",
    },
    throwOnError: true,
  });
}
