import { detect as detectPM } from "package-manager-detector";
import which from "which";
import prompts from "@posva/prompts";
import { x } from "tinyexec";
import { Run } from "./commands/types";
import c from "picocolors";
import packageJson from "../package.json";

export default async function detect(fn: Run, args: string[]) {
  const { name, version } = (await detectPM()) || {};
  const dash = c.dim("-");

  if (
    args.length === 1 &&
    (args[0]?.toLowerCase() === "-h" || args[0] === "--help")
  ) {
    console.log(c.green(`li    ${dash}${dash}${dash}${dash}  install`));
    console.log(c.green(`lu    ${dash}${dash}${dash}${dash}  uninstall`));
    console.log(c.green(`lr    ${dash}${dash}${dash}${dash}  dev`));
    console.log(c.green(`lb    ${dash}${dash}${dash}${dash}  build`));
    process.exit(1);
  }

  if (
    args.length === 1 &&
    (args[0]?.toLowerCase() === "-v" || args[0] === "--version")
  ) {
    console.log(c.green(`${packageJson.version}`));
    process.exit(1);
  }

  if (name && !which.sync(name, { nothrow: true })) {
    const response = await prompts({
      name: "tryInstall",
      type: "confirm",
      message: `Do you want to install ${name} globally?`,
    });
    if (!response) process.exit(1);

    await x("npm", ["i", "-g", `${name}${version ? `@${version}` : ""}`], {
      nodeOptions: {
        stdio: "inherit",
      },
      throwOnError: true,
    });
  }

  fn({ command: name || "npm", args: [...args] });
}
