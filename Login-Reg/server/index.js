const express = require('express')
const app = express()

app.get('/hello', (req, res)=>{
    res.send('hello world')
})

app.listen(8082, ()=> {
    console.log('sever started on 8082')
})