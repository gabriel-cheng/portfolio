const nodemailer = require('nodemailer');

function send(email, telefone, mensagem) {
    let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: 'cliente.portfolio@outlook.com',
            pass: 'portfolio@P0RTF0L10'
        }
    });
    
    transporter.sendMail({
        from: 'Cliente Portfolio <cliente.portfolio@outlook.com>',
        to: 'gabriel_carvalho.contato@outlook.com',
        subject: 'Proposta de trabalho',
        html: `
            <h1>Olá, você recebeu uma nova proposta!</h1><br>
           <strong>Email: </strong>${email}<br>
           <strong>Telefone: </strong>${telefone}<br>
           <strong>Mensagem: </strong>${mensagem}
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