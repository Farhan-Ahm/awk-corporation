// app/utils/mailer.js
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "smtpout.secureserver.net",
  port: parseInt(process.env.MAIL_PORT),
  secure: process.env.MAIL_IS_SECURE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});