/// <reference path="../../typings/typings/index.d.ts" />

const fs = require('fs')
const path = require('path')
var iconv = require('iconv-lite')

fs.readFile(path.join(__dirname, './03-readme-file.md'), (err, data) => {
    if (err) throw err
    console.log(data)
    console.log(data.toString('utf-8'))

})

fs.readFile(path.join(__dirname, './nodejs-logo.png'), (err, data) => {
    if (err) throw err
    //console.log(data)
    //console.log(data.toString('base64'))
})

fs.readFile(path.join(__dirname, './父亲.lrc'), (err, data) => {
    if (err) throw err
    let lines = iconv.decode(data, 'gbk').split('\n');
    //[04:14.63]我的老父亲
    //let regex = /\[\d{2}\:\d{2}\.\d{2}\].+/
    let regex = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/
    let begin = new Date().getTime()
    lines.forEach((item) => {
        let match = regex.exec(item)
        if (match) {
            let m = parseInt(match[1])
            let s = parseInt(match[2])
            let f = parseInt(match[3])
            let lyric = match[4]

            let offset = new Date().getTime() - begin
            setTimeout(() => {
                console.log(lyric)
            }, m * 60 * 1000 + s * 1000 + f - offset)

        } else {
            console.log(item);
        }

    })
})