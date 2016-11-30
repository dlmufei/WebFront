/// <reference path="../../typings/typings/index.d.ts" />

//path 核心模块
const path = require('path')

const demo_path = path.join(__dirname,'./node-path.js')

//
let demo_basename = path.basename(demo_path)
console.log('文件名:' + demo_basename)
let demo_basename_noexname = path.basename(demo_path,'.js')
console.log('文件名-去掉扩展名:' + demo_basename_noexname)

//linux 与 windows下的分割符号
console.log(process.env.PATH.split(path.delimiter))

//
console.log("dirname: "+path.dirname(demo_path))

//扩展名
console.log("extname: "+path.extname(demo_path))

//
let path_obj = path.parse(demo_path)
console.log(path_obj)

console.log("format: "+path.format(path_obj))

//
console.log("isAbsolute: "+path.isAbsolute(demo_path))
console.log("isAbsolute: "+path.isAbsolute('./node-path.js'))

//
console.log('normalize: '+path.normalize('D://123\\234//345\\\\456//    '))

//
console.log('relative: '+path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'))

//
console.log(demo_path.split(path.sep))


