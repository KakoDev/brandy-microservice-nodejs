const express        = require('express');
const router         = express.Router();
const nodemailer        = require('nodemailer');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/frontend/sendmail', async (req, res) => {

  const {fullName, message, email} = req.body;

  try {

    let transporter = nodemailer.createTransport({
      host: "renegociafacil.cl",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "sysroot@renegociafacil.cl", // generated ethereal user
        pass: "(x2U)Aki(,&[" // generated ethereal password
      },
    });
  
    let info = await transporter.sendMail({
      from: '"RenegociaFacil Web" <sysroot@renegociafacil.cl>', // sender address
      to: `"Contacto" <contacto@renegociafacil.cl>`, // list of receivers
      replyTo: `"${fullName}" <${email}>`,
      subject: "Nuevo contacto desde RengociaFacil.cl", // Subject line
      html: `Hola, tenemos un nuevo mensaje entrante desde el sitio web!<br/><br/>De: <b>${fullName}</b><br/><br/>Mensaje:<br/>${message}<br/><br/>Atte.<br/>KeySoft Team<br/>`, // html body
    });

    transporter.close();
  
    if (info?.messageId) {
      res.status(200).send({status: 'OK', message: nodemailer.getTestMessageUrl(info)});
    }
    else {
      res.status(400).send({status: 'Error'});
    }
    
  } catch (error) {
    res.status(400).send({status: 'Error', message: error.message});
  }


});

module.exports = router;    