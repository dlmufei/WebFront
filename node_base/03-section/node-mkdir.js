//文件目录--同步读取
/// <reference path="../../typings/typings/index.d.ts" />


const fs = require('fs')
const path = require('path')
const mkdirs = require('./modules/mkdirs.js')

// const dir_demo=path.join(__dirname,'/dir01')

// fs.mkdir(dir_demo,(err)=>{
//     if (err) throw err
//     console.log('mkdir success')
// })

const dir_demo1=path.join(__dirname,'/dir02/dir03')
mkdirs(dir_demo1,(err)=>{
    console.log(err)
})

// const dir_demo2="./dir04/dir05"
// mkdirs(dir_demo2,(err)=>{
//     console.log(err)
// })

