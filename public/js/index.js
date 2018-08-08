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

socket.on('newLocationMessage', function(message) {
  var li = $('<li></li>');
  var a = $('<a target="_blank">My Location</a>');
  li.text(`${message.from}: `);
  a.attr('href', message.url);
  li.append(a);
  $('#messages').append(li);
})


$('#message-form').on('submit', function(e) {
  e.preventDefault();
  socket.emit('createMessage', {
    from: 'Jimmy',
    text: $('[name=message]').val()
  }, function(data) {
    console.log('Got it', data);
  });
});

$('#send-location').on('click', function() {
  if(!navigator.geolocation) {
    return alert('Your browser does not support Geolocation');
  }
  navigator.geolocation.getCurrentPosition(function(position) {
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }, function() {
    alert('Unable to fetch location');
  });
});

