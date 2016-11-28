node使用-REPL和全局对象
===
## REPL环境（Read Eval Print Loop:交互式解释器）
> - node与node --use_strict(使用严格模式启动的区别)。
> - _代表REPL环境中上一个的命令返回的结果。
> - 使用核心模块的时候，可知直接输入打印查看，方便编程。
> - [REPL环境官方文档](https://nodejs.org/dist/latest-v6.x/docs/api/repl.html)

## 全局对象
> - global，类似浏览器中的window。
[官方文档](https://nodejs.org/dist/latest-v6.x/docs/api/globals.html)
> - process，获取弄得当前的进程信息，如：环境变量。
[官方文档](https://nodejs.org/dist/latest-v6.x/docs/api/process.html)
> - console，区别与浏览器中的console，是node平台自己的。
  [官方文档](https://nodejs.org/dist/latest-v6.x/docs/api/console.html)

## 代码调试
> - 调试代码使用 `node debug [source]`
    >>- cont, c - 继续
    >>- next, n - 下一步
    >>- step, s - 进入代码块
    >>- out, o - 跳出代码块
    >>- pause - 暂停
    >>- run, r -运行 
> - help ,进入调试模式以后输入help查看调试命令
> - watch ,添加监视
> - [官方文档](https://nodejs.org/dist/latest-v6.x/docs/api/debugger.html)

## 一些注意点
> - process.argv
 ```js
  // print process.argv
    process.argv.forEach((val, index) => {
        console.log(`${index}: ${val}`);
    });
  //输出
  E:\WebFront\node_base\01-section>node process-uage.js 2 3 4
  0: C:\Program Files\nodejs\node.exe
  1: E:\WebFront\node_base\01-section\process-uage.js
  2: 2
  3: 3
  4: 4
  //这个是官方的例子，主要说明：
  process.argv的前两个参数是固定的,一个node命令所在路径，
  一个是执行的js文件，随后才是我们自己传入的参数。要注意。
  ```
> - process.stdin 以及 process.stdout 控制台输入输出，
用法参见[官方文档](https://nodejs.org/dist/latest-v6.x/docs/api/process.html#process_process_stdin)
```js
//process.stdin
process.stdin.setEncoding('utf8')
process.stdin.on('readable',()=>{
    var chunk = process.stdin.read()
    if(chunk !==null){
        process.stdout.write('data: '+ chunk)
        process.stdout.write(`data2: ${chunk}`)
    }
})
//注意：'' 与 ``两个符号的差别，否则模版字符串会取不到值，原样输出，写的时候留意一下。
```
参见：[字面量模版说明](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

> - 错误优先的处理规则  
    由于异步回调的机制不能通过try catch来顺序的捕获异常，
    所以node设计时把异常error显示的作为参数，且一般为第一个参数。
    而回调函数一般作为最后一个可选参数，不需要回调时直接忽略即可。
> - var 使用const 和 let 替换，防止var 污染作用域。
> - [console.time(label) 与 console.timeEnd(label) 的结合使用。](https://nodejs.org/dist/latest-v6.x/docs/api/console.html#console_console_time_label)



[相关代码及文档](https://github.com/dlmufei/WebFront)