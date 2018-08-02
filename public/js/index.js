var socket = io();
socket.on('connect', function() {
  console.log('connected to server');

  socket.emit('createMessage', {
    to: 'test@test.com',
    text: 'test message body'
  });
});
socket.on('disconnect', function() {
  console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('got new message from server', message);
});