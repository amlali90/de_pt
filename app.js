var express = require('express')
var app = express()
var http = require('http').Server(app);
const io = require('socket.io')(http)
const mongoose = require('mongoose');

mongoose.Promise    = global.Promise;
mongoose.connect('mongodb://localhost:27017/chat',{ useNewUrlParser: true });


io.on('connection', client => {
   client.on("message",data=>{
     console.log(data);
     
   })
   client.on("register",data=>{
     console.log(data);
     
   })
   client.on("login",data=>{
    console.log(data);
    
  })
   console.log("client :"+client.id +"connected");
    client.on('disconnect', () => { console.log("client :"+client.id +"disconnected") });
  });

  
  http.listen(3000)