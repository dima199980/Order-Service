const nodeMailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


let sendEmail = (email, subject, html) => new Promise(function (resolve, reject) {
    const transporter = nodeMailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'diplombsuir2021@gmail.com',
            pass: 'q77400067'
        }
    }));
    let mailOptions = {
        from: '774004 <diplombsuir2021@gmail.com>', // sender address
        to: email,
        subject: subject,
        html: html,
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            transporter.close();
            return reject(error);
        }
        transporter.close();
        return resolve();
    });
});

module.exports = {
    sendEmail
};
