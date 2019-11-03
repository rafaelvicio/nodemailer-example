const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const transport = nodemailer.createTransport({
  host: "email-smtp.us-east-1.amazonaws.com",
  port: 465,
  secure: true,
  auth: {
    user: "",
    pass: ""
  }
});

transport.use(
  "compile",
  hbs({
    viewEngine: {
      extName: ".html",
      partialsDir: "mail/resources",
      layoutsDir: "mail/resources",
      defaultLayout: "example.html"
    },
    viewPath: "mail/resources",
    extName: ".html"
  })
);

module.exports = transport;
