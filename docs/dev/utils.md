---
title: 工具方法
---

## 本地存储
本地存储使用localStorage, 一般会和 [store](./base.md#store) 的getters一起使用, 本地存储比较好配置, 定义好前缀及get、set、clear等一些方法即可, 参考这里的提交 [361865d](https://github.com/kscript/im-example/commit/361865d4859ce5909e12070f1f7cf1109720a6e3)

## 本地数据库
本地数据库使用 [nano-sql](https://github.com/ClickSimply/Nano-SQL), 在im项目中, 由于网易云信的一些原因, 本地数据库只用于记录已读回执的时间戳, 而没有在IM项目中使用, 因此只做了简单的封装, 参考这里的提交[fc90975](https://github.com/kscript/im-example/commit/fc90975323e3672f2360a92fb5900b151cf738b9)

## Pending
一个用于收集触发条件最终执行某些行为的方法, 当所有条件都已触发时, 执行回调函数.  
在IM项目中, 有许多不能确定其触发顺序的因素, 比如有一个打开聊天页面自动选择某个会话的需求, 这个需求里涉及到的有: vue组件的挂载, SDK同步完成, 后端数据请求完成, 三者之间没有多少关联, 但都是自动选择某个会话的必要条件  
使用方法:   
``` js
// 引入
import Pending from '@/utils/pending';
// Pending为方法时的写法
// 当所有条件都已触发时, 执行回调函数
let example = Pending(['router', 'syncDone', 'sesseionList'], (query, list) => {
    console.log(query, list);
});
example.router({
    //...
});
example.syncDone({
    //...
});
example.sesseionList([
    //...
]);

// Pending为类时的写法
let example = new Pending(['router', 'syncDone', 'sesseionList'], (query, list) => {
    console.log(query, list);
});
example.resolve('syncDone', {
    //...
});
```

## sdk

## polyfill
