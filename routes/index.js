const express = require('express');
const router = express.Router();

const serverinfo = require('./server-info');
const sendMail = require('./send-email');

router.use('/server-info', serverinfo);
router.use('/send-email', sendMail);

module.exports = router;
