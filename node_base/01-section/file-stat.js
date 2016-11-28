const fs = require('fs')

fs.stat('./test.data',(err,stats)=>{
    if(err) throw err
    console.log(`stats: ${JSON.stringify(stats)}`);
    fs.unlink('./test.data',(err)=>{
        if(err) console.log('delete test.data err !')
        console.log('delete test.data suc !')

    })
})

