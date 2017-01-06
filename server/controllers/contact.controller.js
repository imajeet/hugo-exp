import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';
import Contact from '../models/contact';
import cuid from 'cuid';
import slug from 'limax';

function prepareEmail(newContact) {
  return {
    from: '<no-reply@hugocodes.com>', // sender address
    to: 'hugoce17@gmail.com', // list of receivers
    subject: `HugoEXP: ${newContact.name} Wants To Connect`, // Subject line
    html: `
      <div>
        <h1>Contact Info</h1> <br />
        <h3>Name: ${newContact.name}</h3>
        <h3>Phone: ${newContact.phone}</h3>
        <h3>Email: ${newContact.email}</h3> <br />
        <h3>Inquiry: </h3>
        <p>${newContact.inquiry}</p
      </div>
    `,
  };
}

function send(mailOptions, cb) {
  const transporter = nodemailer.createTransport('smtps://hugoce17%40gmail.com:ymaazbrgztbmldlt@smtp.gmail.com');
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return cb(error);
    }
    return cb(null, `Email Sent: ${info.response}`);
  });
}

export function addNewContact(req, res) {
  if (!req.body.data.name || !req.body.data.email || !req.body.data.phone || !req.body.data.inquiry) {
    res.status(403).end();
  }

  const newContact = new Contact(req.body.data);

  // sanitize
  newContact.name = sanitizeHtml(newContact.name);
  newContact.phone = sanitizeHtml(newContact.phone);
  newContact.email = sanitizeHtml(newContact.email);
  newContact.inquiry = sanitizeHtml(newContact.inquiry);
  newContact.slug = slug(sanitizeHtml(newContact.email).toLowerCase(), { lowercase: true });
  newContact.cuid = cuid();

  const preparedEmail = prepareEmail(newContact);

  send(preparedEmail, (err, response) => {
    if (err) return console.log(err);
    return console.log(response);
  });

  // save to db
  newContact.save((err, saved) => {
    if (err) { res.status(500).send(err); }
    return res.json(saved);
  });
}
