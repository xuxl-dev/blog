import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import path from "path";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "Xlxu Lab", // never change this, this is related to comment system
  description: "Xlxu Lab",

  theme,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }) as any,
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
