/// <reference path="../../typings/typings/index.d.ts" />

const fs = require('fs')
const path = require('path')
const iconv = require('iconv-lite')

let streamReader = fs.createReadStream(path.join(__dirname, './父亲.lrc'))

let data
streamReader.on('data',(chunk)=>{
    data +=chunk
})
streamReader.on('end',(chunk)=>{
    console.log(iconv.decode(data, 'gbk'))
})
