const express = require('express')
const cros = require('cors')
const phones = require('./phones.json')
const app = express()
const port = process.env.PORT || 7000
// middleware
app.use(cros())
app.use(express.json())

const users =[
    {   id:1, name:'sifat', email:'sifatinjibon0046@gmai.com'},
    {   id:2, name:'tausif', email:'sifatinjibadassdn0046@gmai.com'},
    {   id:3, name:'rajon', email:'sifasdasdgdgd46@gmai.com'},

]
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

app.get('/users',(req,res)=>{
    res.send(users)
})

app.post('/users',(req,res)=>{
    console.log("Post req is hitting")
    console.log(req.body)
    const newUser = req.body
    newUser.id = users.length +1
    users.push(newUser)
    res.send(newUser)
})
app.listen(port,()=>{
    console.log(`My mc server is running on port: ${port}`)
})