---
title: 环境搭建
---
## 准备工作 
 - 请确保已安装 **nodejs** [(官网下载)](https://nodejs.org/) 8.9或更高版本  
 - 全局安装 @vue/cli 脚手架  
```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

## 创建项目
以下配置可能和原有项目创建时有所不同, 仅供参考
``` cmd
> vue create im-example

Vue CLI v4.1.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with dart-sass)
? Pick a linter / formatter config: Standard
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
```

## 相关链接
[创建演示项目](https://github.com/kscript/im-example/tree/83cb6fd65bb4a25e43828f24e857a220151550a9)