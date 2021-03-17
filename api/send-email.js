const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey("");

app.use(bodyParser.json());

app.post('/', (req, res) => {
    let msg = {
        to: "testing@zelabstudio.com",
        from: req.body.email,
        subject: `${req.body.subject} from ${req.body.firstName}`,
        text: req.body.message
    }
    sgMail.send(msg)
        .then(() => {
            return res.status(200).json({ 'message': 'email send' })
        })
        .catch((err) => {
            return res.status(400).json({"err":err})
        } )
})

module.exports = {
    path: "api/send-email",
    handler: app
}