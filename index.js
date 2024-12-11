const { createServer } = require('http');
const express = require('express');
const cors = require('cors');
const { getCurrentTime } = require('./lib/functions.js');
const routes = require('./routes');

require('dotenv').config();

const route = process.env.API_ROUTE;
const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.static('./public'));
app.use(cors());
app.use(express.json());

// Health check route
app.get('/status', (req, res) => {
	res.status(200).json({ message: `Server is reachable ${getCurrentTime()}` });
});

app.use(route, routes);

const httpServer = createServer(app);

httpServer.listen(port, () => {
	console.log(`Server is running on port ${port}...`);
});
