var socket = io();
socket.on('connect', function() {
  console.log('connected to server');

});
socket.on('disconnect', function() {
  console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('got new message from server', message);
  var li = $('<li></li>');
  li.text(`${message.from}: ${message.text}`);
  $('#messages').append(li);
});


$('#message-form').on('submit', function(e) {
  e.preventDefault();
  socket.emit('createMessage', {
    from: 'Jimmy',
    text: $('[name=message]').val()
  }, function(data) {
    console.log('Got it', data);
  });
});