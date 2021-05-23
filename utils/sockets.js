// utils/socket-io
let io;
exports.socketConnection = (server) => {
	io = require('socket.io')(server, {
		cors: {
			origin: '*',
		},
	});
	io.on('connection', (socket) => {});
};

exports.notifyOrder = (order) => io.emit('NEW ORDER', order);
