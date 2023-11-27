# Xlxu Blog
[![Deploy](https://github.com/xuxl-dev/blog/actions/workflows/deploy-docs.yml/badge.svg)](https://github.com/xuxl-dev/blog/actions/workflows/deploy-docs.yml)

小龙博客

## 添加自定义组件
请在`.vuepress/components`目录下添加组件，组件名为`xxx.vue`，在markdown中使用`<xxx></xxx>`即可。

## 已知问题
#### 在主页预览中

在\<! -- more --\> 标签之前的组件不会渲染

\<! -- more --\> 标签之前的\{\{\}\}(double mustache)标签会被解析成html标签
（在正文中不会出现这个问题）