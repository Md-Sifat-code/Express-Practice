const express = require('express')
const phones = require('./phones.json')
const app = express()
const port =7000

app.get('/',(req,res)=>{
    res.send('Hello you are the best mothertfucker')

})
app.get('/phones',(req,res)=>{
    res.send(phones)
})

app.get('/phones/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const phone = phones.find(phone => phone.id === id)||{}
    req.send(phone)
})

app.get('/motherfucker',(req,res)=>{
    res.send('I know you know that you are the biggest adamca')
})

app.listen(port,()=>{
    console.log(`My mc server is running on port: ${port}`)
})