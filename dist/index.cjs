#! /usr/bin/env node
'use strict';

const process = require('node:process');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const process__default = /*#__PURE__*/_interopDefaultCompat(process);

const args = process__default.argv;
const command = args[0];
console.log(command, args);
