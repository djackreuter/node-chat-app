const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from: 'Jimmy',
    text: 'Test message',
    createdAt: new Date().toString()
  });

  socket.on('createMessage', (message) => {
    console.log('new message from client', message);
  });
  
  socket.on('disconnect', () => {
    console.log('client disconnected');
  });

});


server.listen(3000, () => console.log(`Started server on port ${port}...`));