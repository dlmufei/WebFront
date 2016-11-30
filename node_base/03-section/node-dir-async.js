//文件目录--同步读取
/// <reference path="../../typings/typings/index.d.ts" />

const fs = require('fs')
const path = require('path')
const dateutil = require('dateutil')

Date.prototype.format = dateutil.format;

//获取传入目录，否则是当前目录
const target_dir = path.join(__dirname,process.argv[2] || './')

function print(tdir,depth){
    let prefix = new Array(depth+1).join('│ ')

    const files_info = fs.readdirSync(tdir)
    let files=[]
    let dirs=[]
    files_info.forEach((item)=>{
        let stats = fs.statSync(path.join(tdir,item))
        if(stats.isFile()) {
            files.push(item)
        }else{
            dirs.push(item)
        }
    })

    dirs.forEach((item)=>{
        console.log(`${prefix}├${item}`)        
        print(path.join(tdir,item),depth+1)

    })

    let lenght = files.length -1
    files.forEach((item)=>{
        console.log(`${prefix}${lenght--?'├':'└'}─${item}`)
    })
}
 
 print(target_dir,0)

