//clac module 实现计算逻辑
console.log('__dirname: ' + __dirname)
console.log('__filename: ' + __filename)
console.log(module)


module.exports = (p1, o, p2)=>{
    let result= eval(`${p1} ${o} ${p2}`)
    return result
}

console.log(module)
