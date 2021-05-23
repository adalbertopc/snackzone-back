// utils/socket-io
let io;
exports.socketConnection = (server) => {
	io = require('socket.io')(server, {
		cors: {
			origin: '*',
		},
	});
	io.on('connection', (socket) => {
		console.log('Client Connected');
		socket.on('disconnect', () => {
			console.info(`Client disconnected [id=${socket.id}]`);
		});
	});
};

exports.notifyOrder = (order) => io.emit('NEW ORDER', order);
