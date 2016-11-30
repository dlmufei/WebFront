// 写文件联系
/// <reference path="../../typings/typings/index.d.ts" />

const fs = require('fs')
const path = require('path')

const filename = path.join(__dirname, "./data.txt")

const data = {
    name: 'myname',
    age: 12,
    love: 'work'
}

//
fs.writeFile(filename, JSON.stringify(data), (err) => {
    if (err) throw err
    else console.log('write success...')
})

//
fs.writeFileSync(filename, JSON.stringify(data))

//

let writeStream = fs.createWriteStream(filename)
let datanum = 1;
setInterval(() => {
    writeStream.write(datanum+" |", () => {
        datanum += 1;
        console.log('+1')
    })
}, 1000)
