var socket = io();

socket.on('connect',function() {
  console.log('Connected to server');
});

socket.on('disconnect',function() {
  console.log('Disconneced from server');
});

socket.on('newEmail', function(email){
 console.log('New eMail',email);
});
