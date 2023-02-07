import nml from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config()


export function sendMail(req, res){
	console.log('Request received')
	const transporter = nml.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.MAIL_ADDRESS,
			pass: process.env.MAIL_PASS
		}
	})
			
	var mailOptions = {
		from: `${process.env.MAIL_NAME}`,
		to: req.body.receiver_address,
		subject: req.body.subject,
		html:	`<p>${req.body.content}</p>`
	};
	
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
			res.status(500).json({
				message: 'Something went wrong',
				data: {sent: false},
				code: '500-sendMail'
			})
		} else {
			console.log('Email sent: ' + info.response);
			res.status(250).json({
				message: 'OK',
				data: {sent: true},
				code: '250-sendMail'
			})
		}
	});
}
