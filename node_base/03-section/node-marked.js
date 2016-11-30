//使用第三方模块和fs.watch是想将md文件转为html文件
/// <reference path="../../typings/typings/index.d.ts" />


const fs = require('fs')
const path = require('path')
var marked = require('marked');
// require the module as normal
var bs = require("browser-sync").create();




const filename = path.join(__dirname, process.argv[2] || './readme-test.md')
const filehtml =  path.join(path.dirname(filename),path.basename(filename,path.extname(filename))+'.html')
// .init starts the server
bs.init({
    server: path.dirname(filename),
    index: path.basename(filehtml)
});


fs.watchFile(filename, (curr, prev) => {
    if (curr.mtime === prev.mtime) {
        return false
    }
    fs.readFile(filename, (err, data) => {
        if (err) throw err
        let html = marked(data.toString('utf8'))
        html = temple.replace(`{{{content}}}`,html)
        fs.writeFile(filehtml,html,(err)=>{
            if(err) throw err
            // Now call methods on bs instead of the
            // main browserSync module export
            bs.reload(filehtml);
            console.log('makedown file has updated !')            
        })
    })
})

let temple = 
`
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        {{{content}}}
    </body>
</html>
`