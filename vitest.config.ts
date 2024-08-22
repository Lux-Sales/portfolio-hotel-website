/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import * as path from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    globals: true,
  },
});
