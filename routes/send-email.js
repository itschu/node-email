const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
	const { to, subject, message, replyTo, sender, host, port, secure, user, pass, smtpp, email } = req.body;

	const smtp = {
		host,
		port,
		secure,
		auth: {
			user,
			pass,
		},
		tls: {
			rejectUnauthorized: secure,
		},
	};

	const transporter = nodemailer.createTransport(smtp);

	try {
		await transporter.sendMail({
			from: `${sender} <${email}>`,
			to: to,
			replyTo: replyTo,
			subject: subject,
			html: message,
		});

		res.status(200).json({
			status: true,
			message: 'Emails sent successfully',
			data: [],
		});
	} catch (error) {
		const errMsg = 'an error occured, try again later';

		res.status(400).json({
			status: false,
			data: [],
			message: errMsg,
			moreinf: error,
		});
	}
});

module.exports = router;
