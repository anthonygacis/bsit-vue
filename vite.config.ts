import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  if (mode === "development") {
    return {
      plugins: [vue()],
    };
  } else {
    return {
      base: "/bsit-vue/",
      plugins: [vue()],
    };
  }
});
