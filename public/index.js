var socket = io();

socket.on('connect',function() {
  console.log('Connected to server');
  });

socket.emit('createMessage',{
    To: 'Mayur',
    Text : 'Hey How R U'
  });
socket.on('disconnect',function() {
  console.log('Disconneced from server');
});

socket.on('newEmail', function(email){
 console.log('New eMail',email);
});
socket.on('newMessage', function(Text){
 console.log('New Message Created',Text);
});
