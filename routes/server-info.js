const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
	res.status(200).json({ status: true, message: 'online', data: { port: process.env.PORT || 3002, route: process.env.API_ROUTE } });
});

module.exports = router;
