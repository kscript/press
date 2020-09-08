---
title: 打包
---
打包请使用命令
```
npm run build:dev
```
> 使用npm run build打包的话, 会缺失一些环境变量  
这些环境变量存放于 im/build/env.js, 具体如下
``` javascript
const env = {
  VUE_APP_BUILD_MODE: 'dev', // 打包时的模式
  VUE_APP_API_URL: '/api/', // axios的baseURL
  VUE_APP_CDN_ROOT_URL: `//cdn.{ROOT_DOMAIN}/`, // 静态资源根目录(用于部署项目时, 将该路径由字符串替换为变量, 更详细的说明参考部署-注意事项-2)
  VUE_APP_CDN_URL: `//cdn.{ROOT_DOMAIN}/im/`, //静态资源存放位置
  VUE_APP_REPORT_URL: `http://192.168.1.28/badjs` // 错误上报, 暂未使用
};
```
### 对VUE_APP_BUILD_MODE的说明
早期, 由于vue项目有 开发/生产环境, 后端有 开发/测试/线上环境.  
我们打包好的vue项目, 要先部署在开发环境, 测试环境, 测试通过后才能上线, 所以有了这个环境变量, 用来区分是处于哪个后端环境. 
  
后来根据后端的建议, 希望可以一套代码直接在 开发/测试/线上环境运行, 因此使用脚本磨平了不同环境的差异.  
而有差异的配置, 则是用后端模板变量写在入口文件的appConfig变量里
  
目前该环境变量在打包时, 只检查是否不为空. 
- 不为空 表示这是打包给 测试环境 和 线上环境 使用的代码
- 为空 表示是vue项目的 开发环境 或 生产环境
