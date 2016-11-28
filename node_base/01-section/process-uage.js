
// print process.argv
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

//process.stdin
process.stdin.setEncoding('utf8')
process.stdin.on('readable',()=>{
    var chunk = process.stdin.read()
    if(chunk !==null){
        process.stdout.write('data: '+ chunk)
        process.stdout.write(`data2: ${chunk}`)
    }
})

process.stdin.on('end',()=>{
    process.stdout.write('end')
})

