const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message.js');

const port = process.env.PORT || 3000;
const publicpath =  path.join(__dirname,'../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicpath));

io.on('connection',(socket)=>{
 console.log('New User Connected');
 // socket.emit('newEmail',{
 //   From : 'mayurnpawar@gmail.com',
 //   Subject : 'How r you',
 //   Received : 23432
 // });
 socket.emit('newMessage' ,generateMessage('Admin','Welcome to chat application'));
 socket.broadcast.emit('newMessage' ,generateMessage('Admin','New User Joined our chat application'));

 socket.on('createMessage',(TextData,callback)=>{
     console.log('Message Recevived');
     io.emit('newMessage' , generateMessage(TextData.from,TextData.text));
     callback('Meesga created successfully');
 });
 socket.on('disconnect',()=>{
 console.log('User was disconnected');
 });
});


server.listen(port,()=>{
  console.log(`Server has been started and running on ${port}`);
});
