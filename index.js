const express = require('express');
const app = express();
const server = require('http').createServer(app);
const { socketConnection } = require('./utils/sockets');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
require('./database/Connection');

//Middlewares
app.use(express.json());
app.use(cors());
socketConnection(server);

//routes
app.use(require('./api/routes/UserRoutes'));
app.use(require('./api/routes/ProductRoutes'));
app.use(require('./api/routes/OrderRoutes'));

app.set('secretKey', process.env.TOKEN_KEY || 'nodeRestApi'); // jwt secret token
//turn on server
server.listen(PORT, () => {
	console.log('Server on port ' + PORT);
});

module.exports = function getIO() {
	return io;
};
