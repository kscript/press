---
title: 基础配置
---
## router
- 脚手架自带  

在示例项目中, 我们使用 [Vue-router](https://router.vuejs.org/zh/guide/) 进行路由管理.  

路由功能可以开箱即用, 不再过多赘述, 参考文档即可

## store
- 脚手架自带   

在示例项目中, 我们使用 [Vuex](https://vuex.vuejs.org/zh/guide/) 进行状态管理.  

虽然脚手架帮我们配置好一个简单的实例, 但由于使用了ts, 因此还需要添加一些类型描述. 参考这里的提交 [cca4c5c](https://github.com/kscript/im-example/commit/cca4c5c20e3a0852cca77f0360d751c70a21b91f)

## axios
- 需要自己配置  

在示例项目中, 我们使用 [axios](https://www.kancloud.cn/yunye/axios/234845) 处理数据请求.  

安装 axios
``` cmd
:: qs模块用于对要传的参数进行处理, 推荐使用, 但非必要
npm i -D axios qs
```
配置 axios, 参考这里的提交 [271252f](https://github.com/kscript/im-example/commit/271252f0fa96a4ca26b122cb7b1cdb03ee15d0fb).  
::: tip axios使用说明
axios 一般会结合 store 来使用, 只有**当用户的某种行为, 触发了 store 的 action, 需要后端数据支持时**, 我们才会去请求数据, 因此**不需要给外部留下明显的调用方式**.  
:::

## eventBus
- 需要自己配置  

eventBus 实际上是一个单独的 vue 实例, 在示例项目中, 充当一个全局的 EventEmitter.   
eventBus 的基本配置, 参考这里的提交 [8d3eb8a](https://github.com/kscript/im-example/commit/8d3eb8ac55b5af92b22c914199d3d580422857c2) , 后面还有对 eventBus 进行更详细一些的划分, 见 [f823466](https://github.com/kscript/im-example/commit/f8234661ee81b1f34b04d81ecaf3a5d19b9d9a90)  
由于示例项目基本上是围绕 **用户 ↔ SDK** 的交互, 因此整体思想是: 逻辑层事件驱动(用户事件,sdk事件) + UI层数据驱动, 而我们的**核心代码, 大部分会在 eventBus 上**.  

## mock


## 其它配置
- 需要自己配置  

|  |
| -- |
| 配置文件 |
| 工具方法 |
| 类型描述 |

查看提交 [9ac35b7](https://github.com/kscript/im-example/commit/9ac35b7092870ddd2357e3db7945a13a9e5d8d9d)