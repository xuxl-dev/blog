import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: ""/homepage-blog/,

  lang: "zh-CN",
  title: "Xlxu Lab", // never change this, this is related to comment system
  description: "Xlxu Lab",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
