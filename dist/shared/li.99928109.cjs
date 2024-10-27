'use strict';

const packageManagerDetector = require('package-manager-detector');
const which = require('which');
const prompts = require('@posva/prompts');
const tinyexec = require('tinyexec');
const c = require('picocolors');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const which__default = /*#__PURE__*/_interopDefaultCompat(which);
const prompts__default = /*#__PURE__*/_interopDefaultCompat(prompts);
const c__default = /*#__PURE__*/_interopDefaultCompat(c);

const name = "@samuel/li";
const version = "1.0.0";
const main = "./dist/index.cjs";
const module$1 = "./dist/index.mjs";
const packageManager = "npm@10.8.2";
const type = "module";
const bin = {
	li: "dist/li.mjs",
	lr: "dist/lr.mjs",
	lu: "dist/lu.mjs",
	lb: "dist/lb.mjs"
};
const scripts = {
	dev: "tsx src/index.ts",
	build: "unbuild"
};
const exports$1 = {
	".": {
		"import": "./dist/index.mjs",
		require: "./dist/index.cjs"
	}
};
const types = "./dist/index.d.ts";
const files = [
	"bin",
	"dist"
];
const keywords = [
];
const author = "";
const license = "ISC";
const description = "";
const dependencies = {
	"@posva/prompts": "^2.4.4",
	"package-manager-detector": "^0.2.2",
	picocolors: "^1.1.1",
	tinyexec: "^0.3.1",
	tinyglobby: "^0.2.9",
	tsx: "^4.19.1",
	typescript: "^5.6.3",
	which: "^5.0.0"
};
const devDependencies = {
	"@types/node": "^22.7.9",
	"@types/which": "^3.0.4",
	unbuild: "^2.0.0"
};
const packageJson = {
	name: name,
	version: version,
	main: main,
	module: module$1,
	packageManager: packageManager,
	type: type,
	bin: bin,
	scripts: scripts,
	exports: exports$1,
	types: types,
	files: files,
	keywords: keywords,
	author: author,
	license: license,
	description: description,
	dependencies: dependencies,
	devDependencies: devDependencies
};

async function detect(fn, args) {
  const { name, version } = await packageManagerDetector.detect() || {};
  const dash = c__default.dim("-");
  if (args.length === 1 && (args[0]?.toLowerCase() === "-h" || args[0] === "--help")) {
    console.log(c__default.green(`li    ${dash}${dash}${dash}${dash}  install`));
    console.log(c__default.green(`lu    ${dash}${dash}${dash}${dash}  uninstall`));
    console.log(c__default.green(`lr    ${dash}${dash}${dash}${dash}  dev`));
    console.log(c__default.green(`lb    ${dash}${dash}${dash}${dash}  build`));
    process.exit(1);
  }
  if (args.length === 1 && (args[0]?.toLowerCase() === "-v" || args[0] === "--version")) {
    console.log(c__default.green(`${packageJson.version}`));
    process.exit(1);
  }
  if (name && !which__default.sync(name, { nothrow: true })) {
    const response = await prompts__default({
      name: "tryInstall",
      type: "confirm",
      message: `Do you want to install ${name} globally?`
    });
    if (!response)
      process.exit(1);
    await tinyexec.x("npm", ["i", "-g", `${name}${version ? `@${version}` : ""}`], {
      nodeOptions: {
        stdio: "inherit"
      },
      throwOnError: true
    });
  }
  fn({ command: name || "npm", args: [...args] });
}

exports.detect = detect;
