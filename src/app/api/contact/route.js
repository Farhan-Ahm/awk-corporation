import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, recaptchaToken } = body;

    // Validate input
    if (!name || !email || !phone || !message || !recaptchaToken) {
      return Response.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;

    const recaptchaResponse = await fetch(recaptchaVerifyUrl, {
      method: 'POST',
    });

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return Response.json(
        { success: false, message: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT),
      secure: process.env.MAIL_IS_SECURE === 'true',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Email to admin/company
    const adminMailOptions = {
      from: `"${name}" <${process.env.MAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? process.env.MAIL_USER : 'technicalservices@awkcorporation.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #2C3E50 0%, #E40C29 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              background: #f8f9fa;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 20px;
              background: white;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #E40C29;
            }
            .field-label {
              font-weight: bold;
              color: #2C3E50;
              margin-bottom: 5px;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .field-value {
              color: #333;
              font-size: 16px;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #e9ecef;
              text-align: center;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🏢 New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0;">AWK Corporation Website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Name</div>
              <div class="field-value">${name}</div>
            </div>
            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value"><a href="mailto:${email}" style="color: #E40C29; text-decoration: none;">${email}</a></div>
            </div>
            <div class="field">
              <div class="field-label">Phone</div>
              <div class="field-value"><a href="tel:${phone}" style="color: #E40C29; text-decoration: none;">${phone}</a></div>
            </div>
            <div class="field">
              <div class="field-label">Message</div>
              <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="footer">
              <p>This message was sent from the AWK Corporation contact form.</p>
              <p>Submitted on: ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email to user (confirmation)
    const userMailOptions = {
      from: `"AWK Corporation" <${process.env.MAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting AWK Corporation',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #2C3E50 0%, #E40C29 100%);
              color: white;
              padding: 40px 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
            }
            .content {
              background: #f8f9fa;
              padding: 40px 30px;
              border-radius: 0 0 10px 10px;
            }
            .message-box {
              background: white;
              padding: 25px;
              border-radius: 8px;
              margin: 20px 0;
              border-left: 4px solid #E40C29;
            }
            .button {
              display: inline-block;
              background: #E40C29;
              color: white;
              padding: 12px 30px;
              text-decoration: none;
              border-radius: 5px;
              margin-top: 20px;
              font-weight: bold;
            }
            .footer {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 2px solid #e9ecef;
              text-align: center;
              color: #666;
              font-size: 14px;
            }
            .contact-info {
              margin-top: 20px;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>✉️ Message Received!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Thank you for reaching out to us</p>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for contacting <strong>AWK Corporation</strong>. We have received your message and our team will review it shortly.</p>
            
            <div class="message-box">
              <p style="margin: 0; font-weight: bold; color: #2C3E50; margin-bottom: 10px;">Your Message:</p>
              <p style="margin: 0; color: #666;">${message.replace(/\n/g, '<br>')}</p>
            </div>

            <p>We typically respond within 24-48 business hours. If your inquiry is urgent, please feel free to call us directly.</p>

            <div style="text-align: center;">
              <a href="https://awkcorporation.com" class="button">Visit Our Website</a>
            </div>

            <div class="contact-info">
              <p><strong>AWK Corporation</strong></p>
              <p>📧 Email: technicalservices@awkcorporation.com</p>
              <p>📞 Phone: (403) 497-5725</p>
              <p>🌐 Website: www.awkcorporation.com</p>
            </div>

            <div class="footer">
              <p>This is an automated response to confirm we received your message.</p>
              <p>© ${new Date().getFullYear()} AWK Corporation. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return Response.json(
      { 
        success: true, 
        message: 'Message sent successfully! We\'ll get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again later.' 
      },
      { status: 500 }
    );
  }
}