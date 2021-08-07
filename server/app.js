const express = require('express')
const app = express()
require("dotenv").config()

const router = express.Router();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser')
const cors = require('cors');

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())
app.use(express.json())
app.use('/', router)

//creates a reusable transporter object using the default SMTP transport
const transport = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
}


const transporter = nodemailer.createTransport(transport)

//transporter error handling 
transporter.verify((error, success) => {
    if (error) {
        console.log(error, 'Not ready to take messages')
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    let name = req.body.name
    let email = req.body.email
    let subject = req.body.subject
    let message = req.body.message
    let content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message}`

    let mail = {
        from: `"${name}" ${email}`,
        to: process.env.USER_EMAIL,
        subject: subject,
        text: message,
        html: `<div className="email">
        <h4>${subject}</h4>
        <p>${message}</p>
        </div>`
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
            transporter.sendMail({
                from: process.env.USER_EMAIL,
                to: email,
                subject: "Thanks for visiting!",
                html: `<div className="email">
                <h4>Thanks for reaching out!</h4>
                <p>I've received your message and will respond as soon as I see it. Thanks for visiting my portfolio and I hope you have a great day!</p>
                </div>`
            }, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Message sent: ' + info.response);
                }
            });
        }
    })
})


app.listen(4000, () => {
    console.log('Server is listening')
})