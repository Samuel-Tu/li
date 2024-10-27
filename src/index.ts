#! /usr/bin/env node
import process from "node:process";
import detect from "./detect";

const args = process.argv;
const command = args[0];

// detect();

console.log(command, args);
