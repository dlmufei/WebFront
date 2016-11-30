/// <reference path="../../../typings/typings/index.d.ts" />


const fs = require('fs')
const path = require('path')

function mkdirs(pathname, callback) {
    let root_path = path.dirname(module.parent.filename)
    console.log('root_path: ' + root_path)
    pathname = path.isAbsolute(pathname) ? pathname : path.join(root_path, pathname)
    let path_relative = path.relative(root_path, pathname);
    let dirs = path_relative.split(path.sep)
    let current_relative_dir = ''
    try {
        dirs.forEach((dir) => {
            try {
                fs.statSync(path.join(root_path, current_relative_dir, dir))
                current_relative_dir += path.sep + dir;
                console.log(path.join(root_path, current_relative_dir) + " has exist !")
            } catch (error) {
                fs.mkdirSync(path.join(root_path, current_relative_dir, dir))
                current_relative_dir += path.sep + dir;
                console.log(path.join(root_path, current_relative_dir) + " creat success !")
            }
        })
    } catch (error) {
        callback && callback(error)
    }

}

module.exports = mkdirs;