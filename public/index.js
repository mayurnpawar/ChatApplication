var socket = io();

socket.on('connect',function() {
  console.log('Connected to server');
  });

socket.emit('createMessage',{
    from: 'Mayur',
    text : 'Hey How R U'
  });
socket.on('disconnect',function() {
  console.log('Disconneced from server');
});

// socket.on('newEmail', function(email){
//  console.log('New eMail',email);
// });
socket.on('newMessage', function(TextMessage){
 console.log('New Message Created',TextMessage);
});
