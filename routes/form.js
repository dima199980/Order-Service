const express = require('express');
const router = express.Router();
const { sendEmail } = require('../lib/utils/sendToEmail');

// модуль авторизации
router.post('/post', function (req, res) {

    if (!req.body.category || !req.body.firstName || !req.body.lastName || !req.body.telephoneNumber || !req.body.email) return res.json({err: 1});

    let subject = "Заявка";

    let html = '<b>Заявка:</b>' + "<br />" +
        'Оценка: ' + req.body.category.toString() + "<br />" +
        'Имя: ' + req.body.firstName.toString() + "<br />" +
        'Фамилия: ' + req.body.lastName.toString() + "<br />";

    (async () => {
        try {
            if (req.body.organizationName) html = html + 'Название организации: ' + req.body.organizationName.toString() + "<br />";
            else html = html + 'Название организации: не заполнено' + "<br />";

            if (req.body.organizationName) html = html + 'Сообщение: ' + req.body.message.toString() + "<br />";
            else html = html + 'Сообщение: не заполнено' + "<br />";

            for (let i = 0; i < req.body.organizations.organizations.length; i++) {
                html = html + 'Информация об объекте: ' + req.body.organizations.organizations1[i].toString() + ' ' + req.body.organizations.organizations2[i].toString() + "<br />";
            }

            if (req.body.dateConnect) html = html + 'Удобное время: ' + req.body.dateConnect.toString() + "<br />";
            else html = html + 'Удобное время: не заполнено' + "<br />" + "<br />";

            html = html + 'Телефон: ' + req.body.telephoneNumber.toString() + "<br />" +
                'E-mail: ' + req.body.email.toString();

            await sendEmail(req.body.email.toString(), subject, html);
            return res.json({err: 0});
        } catch (error) {
            console.error(new Date().toLocaleString("ru"), error);
            res.json({err: error});
        }
    })();
});


module.exports = router;
