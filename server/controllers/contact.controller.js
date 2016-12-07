import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';
import Contact from '../models/contact';
import cuid from 'cuid';
import slug from 'limax';

function prepareEmail(newContact) {
  return {
    from: newContact.email, // sender address
    to: 'hugoce17@gmail.com', // list of receivers
    subject: 'HugoEXP Inquiry', // Subject line
    text: newContact.inquiry,
  };
}

function sendEmail(mailOptions) {
  const transporter = nodemailer.createTransport('smtps://hugoce17%40gmail.com:ymaazbrgztbmldlt@smtp.gmail.com');
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    return console.log(`Email Sent: ${info.response}`);
  });
}

export function addNewContact(req, res) {
  if (!req.body.data.name || !req.body.data.email || !req.body.data.phone || !req.body.data.inquiry) {
    res.status(403).end();
  }

  // sanitize
  const newContact = new Contact(req.body.data);

  newContact.name = sanitizeHtml(newContact.name);
  newContact.phone = sanitizeHtml(newContact.phone);
  newContact.email = sanitizeHtml(newContact.email);
  newContact.inquiry = sanitizeHtml(newContact.inquiry);
  newContact.slug = slug(newContact.email.toLowerCase(), { lowercase: true });
  newContact.cuid = cuid();

  // save to db
  newContact.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    sendEmail(prepareEmail(newContact));
    res.json(saved);
  });
}
