/// <reference path="../../typings/typings/index.d.ts" />

const fs = require('fs')
const path = require('path')
const iconv = require('iconv-lite')
const readline = require('readline')


let streamReader = fs.createReadStream(path.join(__dirname, './父亲.lrc')).pipe(iconv.decodeStream('gbk'))
let r1 = readline.createInterface({ input: streamReader })
const regex = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/
const begin = new Date().getTime()
r1.on('line', (line) => {
    task(line)
})

function task(item) {
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
}

