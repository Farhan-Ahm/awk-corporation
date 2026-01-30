//api>contact>route.js
import { NextResponse } from "next/server";
import { transporter } from "@/app/utils/mailer";

export async function POST(req) {
    const body = await req.json();

    if (!body || !body.name || !body.email || !body.message || !body.recaptchaToken) {
        return NextResponse.json({ message: "Missing required data" }, { status: 422 });
    }

    const { name, email, phone, message, recaptchaToken } = body;

    // Verify reCAPTCHA
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || '';
    const formdata = new FormData();
    formdata.append('secret', secretKey);
    formdata.append('response', recaptchaToken);

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        body: formdata,
    });

    const result = await response.json();

    if (!result.success || result.score < 0.5) {
        return NextResponse.json({ message: "Failed to verify captcha" }, { status: 403 });
    }

    // Email to admin
    const adminMailOptions = {
        from: `"AWK Corporation Contact Form" <${process.env.MAIL_USER}>`,
        to: process.env.MAIL_USER,
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
            <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0;">
                    <table role="presentation" cellpadding="10" cellspacing="0" width="100%" style="max-width: 600px; margin: 50px auto 0; background-color: #fff; border: 1px solid #ddd; border-radius: 8px;">
                        <thead>
                            <tr style="background-color: #E40C29; border-bottom: 2px solid #ddd;">
                                <th colspan="2" style="text-align: center; font-size: 18px; font-weight: bold; color: white; padding: 10px 0;">AWK Corporation Website Form Inquiry</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom: 1px solid #adadad;">
                                <td style="padding: 8px; font-size: 14px; font-weight: bold; color: #333; width: 150px;">Name:</td>
                                <td style="padding: 8px; font-size: 14px; color: #333;">${name}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #adadad;">
                                <td style="padding: 8px; font-size: 14px; font-weight: bold; color: #333;">Email:</td>
                                <td style="padding: 8px; font-size: 14px; color: #333;">${email}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #adadad;">
                                <td style="padding: 8px; font-size: 14px; font-weight: bold; color: #333;">Phone:</td>
                                <td style="padding: 8px; font-size: 14px; color: #333;">${phone || 'N/A'}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #adadad;">
                                <td style="padding: 8px; font-size: 14px; font-weight: bold; color: #333;">Message:</td>
                                <td style="padding: 8px; font-size: 14px; color: #333;">${message}</td>
                            </tr>
                        </tbody>
                    </table>
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
            <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0;">
                    <table role="presentation" cellpadding="10" cellspacing="0" width="100%" style="max-width: 600px; margin: 50px auto 0; background-color: #fff; border: 1px solid #ddd; border-radius: 8px;">
                        <thead>
                            <tr style="background-color: #E40C29; border-bottom: 2px solid #ddd;">
                                <th style="text-align: center; font-size: 18px; font-weight: bold; color: white; padding: 15px 0;">Thank You for Contacting Us!</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 20px; font-size: 14px; color: #333;">
                                    <p>Dear ${name},</p>
                                    <p>Thank you for contacting <strong>AWK Corporation</strong>. We have received your message and our team will review it shortly.</p>
                                    <p><strong>Your Message:</strong></p>
                                    <p style="background: #f8f9fa; padding: 15px; border-left: 4px solid #E40C29;">${message}</p>
                                    <p>We typically respond within 24-48 business hours. If your inquiry is urgent, please feel free to call us at <strong>(403) 497-5725</strong>.</p>
                                    <p>Best regards,<br><strong>AWK Corporation Team</strong></p>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr style="background-color: #f8f9fa; border-top: 2px solid #ddd;">
                                <td style="text-align: center; padding: 10px; font-size: 12px; color: #666;">
                                    © ${new Date().getFullYear()} AWK Corporation. All rights reserved.
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </body>
            </html>
        `,
    };
    
    try {
        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);
        
        return NextResponse.json({ message: "Submission successful!" }, { status: 200 });
    } catch (error) {
        console.error("Mail error:", error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
}