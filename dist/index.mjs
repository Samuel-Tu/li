#! /usr/bin/env node
import process from 'node:process';

const args = process.argv;
const command = args[0];
console.log(command, args);
