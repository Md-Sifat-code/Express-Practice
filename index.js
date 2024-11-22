const express = require('express')

const app = express()
const port =7000

app.get('/',(req,res)=>{
    res.send('Hello you are the best mothertfucker')

})

app.get('/motherfucker',(req,res)=>{
    res.send('I know you know that you are the biggest mc')
})

app.listen(port,()=>{
    console.log(`My mc server is running on port: ${port}`)
})