//文件目录--异步读取，但是有个问题

/// <reference path="../../typings/typings/index.d.ts" />

const fs = require('fs')
const path = require('path')
const dateutil = require('dateutil')

Date.prototype.format = dateutil.format;

//获取传入目录，否则是当前目录
const target_dir = path.join(__dirname,process.argv[2] || './')

fs.readdir(target_dir,(err,files)=>{
    if(err) throw err
    files.forEach((item)=>{
        //在异步获取文件信息的过程中，由于每个文件不同可能导致打印文件乱序
        fs.stat(path.join(target_dir,item),(err,stats)=>{
            console.log(`${stats.mtime.format('y/m/d h:m')}\t${stats.size}\t${item}`)
        })
    })
})