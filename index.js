const express = require('express');
const app = express();
const server = require('http').createServer(app);
// const io = require('socket.io')(server);
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
require('./database/Connection');

//Middlewares
app.use(express.json());
app.use(cors());

//routes

app.use(require('./api/routes/ProductRoutes'));
app.use(require('./api/routes/OrderRoutes'));

app.set('secretKey', process.env.TOKEN_KEY || 'nodeRestApi'); // jwt secret token
//turn on server
server.listen(PORT, () => {
	console.log('Server on port ' + PORT);
});
