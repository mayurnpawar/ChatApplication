var socket = io();

socket.on('connect',function() {
  console.log('Connected to server');
  });



socket.on('disconnect',function() {
  console.log('Disconneced from server');
});

// socket.on('newEmail', function(email){
//  console.log('New eMail',email);
// });
socket.on('newMessage', function(TextMessage){
 console.log('New Message Created',TextMessage);
 var li = jQuery('<li></li>');
 li.text(`${TextMessage.from} : ${TextMessage.text}`);
 jQuery('#Recevied-Message').append(li);
});

jQuery('#message-form').on('submit',function (e) {
  e.preventDefault();
  socket.emit('createMessage',{
      from: 'User',
      text : jQuery('[name=message]').val()
    },function(data){
    });
})
