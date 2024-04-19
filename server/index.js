const { Server } = require('socket.io');

const io = new Server(3000, {
    cors: true,
});

io.on('connection', socket => {
    console.log('sokcet connected', socket.id);
    socket.on('room:join', (data) => {
        console.log(data);
    })
});

