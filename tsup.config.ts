import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  dts: true,
  clean: true,
  sourcemap: false,
  format: ["esm"],
  ignoreWatch: [".storybook", "stories"],
  external: [
    "next",
    "next/link",
    "react-icons",
    "react-icons/*",
    "vaul",
    "@radix-ui/*",
  ],
});
