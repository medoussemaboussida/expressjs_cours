const express = require('express')
const http=require('http')
const mongo=require('mongoose')
const path=require('path')
const body=require('body-parser')
const {addChat}=require('./controller/userController')
//database connection
const db=require('./config/dbconnection.json')
mongo.connect(db.url).then(()=>{
    console.log('database connect')
}).catch(()=>console.log('database error'))

const userRouter=require('./routes/users')
//const bodyParser = require('body-parser')
const produitRouter=require('./routes/produit')

const app=express()
app.set("views",path.join(__dirname,"views"))
app.set("view engine","twig") //extension twig
app.use(express.json())
app.use('/users',userRouter)
app.use('/produit',produitRouter)
//app.use(bodyParser.json())


const server=http.createServer(app,console.log('run server'))

//socket connection partie serveur
const io=require('socket.io')(server)
io.on("connection",(socket)=>{
console.log("user connected")
socket.emit("msg","user connected") //envoyer key data

//accepter le message submit
socket.on("msgname",(data)=>{
    addChat(data)
    io.emit("msgname",data)
})

//typing
socket.on("typing",(data)=>{
    socket.broadcast.emit("typing",data)
})

//deconnection
socket.on("disconnect",()=>{
    console.log("user disconnected")
    io.emit("msg","user disconnected")
})
})


server.listen(3000)