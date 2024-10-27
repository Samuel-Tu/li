#! /usr/bin/env node
import detect from "../detect";
import process from "node:process";
import { x } from "tinyexec";
import { runOption } from "./types";

detect(runNr, process.argv.slice(2).filter(Boolean));

async function runNr(option: runOption) {
  const { command, args } = option;
  let lbArgs = ["run", "build", ...args];

  await x(command, lbArgs, {
    nodeOptions: {
      stdio: "inherit",
    },
    throwOnError: true,
  });
}
