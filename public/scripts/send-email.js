require('dotenv').config();
const nodemailer = require('nodemailer');

const userEmail = process.env.USER_EMAIL;
const userPass = process.env.USER_PASS;

function send(name, email, cellphone, msg) {
    let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: `${userEmail}`,
            pass: `${userPass}`
        }
    });

    transporter.sendMail({
        from: `Cliente Portfolio <${userEmail}>`,
        to: 'gabriel_carvalho.contato@outlook.com',
        subject: 'Proposta de trabalho',
        html: `
            <h1>Olá, você recebeu uma nova proposta!</h1><br>
           <strong>Cliente: </strong>${name}<br>
           <strong>Email: </strong>${email}<br>
           <strong>Telefone: </strong>${cellphone}<br>
           <strong>Mensagem: </strong>${msg}
        `
    }).then(message => {
        console.log(message);
    }).catch(err => {
        console.log(err);
    });
}

module.exports = {
    send: send
};
