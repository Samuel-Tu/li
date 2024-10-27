import { defineBuildConfig } from "unbuild";
import { globSync } from "tinyglobby";
import { basename } from "node:path";

export default defineBuildConfig({
  entries: globSync(["src/commands/*.ts", "src/index.ts"], {
    expandDirectories: false,
  }).map((i) => ({
    input: i.slice(0, -3),
    name: basename(i).slice(0, -3),
  })),
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    commonjs: {
      exclude: ["**/*.d.ts"],
    },
  },
});
