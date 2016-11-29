/// <reference path="../../typings/typings/index.d.ts" />
//调用计算module，实现计算功能

console.log('__dirname: ' + __dirname)
console.log('__filename: ' + __filename)
//require 前输出
console.log(module)
const args = process.argv.slice(2)
let p1=args[0]
let operate=args[1]
let p2=args[2]

//1.直接执行脚本
let result=eval(` ${p1} ${operate} ${p2} `)
console.log(result)

//2.使用require机制
const calc=require('./calc-module.js')
console.log(calc(p1, operate, p2))

//require 后输出
console.log(module)
