import { NextResponse } from "next/server";
import { transporter } from "@/app/utils/mailer";

export async function POST(req) {
    const body = await req.json();

    if (!body || !body.firstName || !body.lastName || !body.email || !body.phone || !body.projectType || !body.projectDescription || !body.recaptchaToken) {
        return NextResponse.json({ message: "Missing required data" }, { status: 422 });
    }

    const { 
        firstName, 
        lastName, 
        company, 
        email, 
        phone, 
        projectType, 
        projectSize, 
        preferredDate, 
        preferredTime, 
        location, 
        budget, 
        projectDescription, 
        howDidYouHear, 
        newsletter,
        recaptchaToken 
    } = body;

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

    // Format preferred date
    let formattedDate = 'Not specified';
    if (preferredDate) {
        const date = new Date(preferredDate);
        formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Email to admin
    const adminMailOptions = {
        from: `"AWK Corporation Appointment Request" <${process.env.MAIL_USER}>`,
        to: process.env.MAIL_USER,
        replyTo: email,
        subject: `New Appointment Request: ${firstName} ${lastName} - ${projectType}`,
        html: `
            <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0;">
                    <table role="presentation" cellpadding="10" cellspacing="0" width="100%" style="max-width: 700px; margin: 50px auto 0; background-color: #fff; border: 1px solid #ddd; border-radius: 8px;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #E40C29 0%, #2C3E50 100%); border-bottom: 2px solid #ddd;">
                                <th colspan="2" style="text-align: center; font-size: 18px; font-weight: bold; color: white; padding: 15px 0;">AWK Corporation - Appointment Request</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Client Information -->
                            <tr style="background-color: #f8f9fa;">
                                <td colspan="2" style="padding: 15px; font-size: 16px; font-weight: bold; color: #2C3E50;">Client Information</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e9ecef;">
                                <td style="padding: 12px 15px; font-size: 14px; font-weight: bold; color: #333; width: 200px;">Name:</td>
                                <td style="padding: 12px 15px; font-size: 14px; color: #333;">${firstName} ${lastName}</td>
                            </tr>
                            ${company ? `
                            <tr style="border-bottom: 1px solid #e9ecef;">
                                <td style="padding: 12px 15px; font-size: 14px; font-weight: bold; color: #333;">Company:</td>
                                <td style="padding: 12px 15px; font-size: 14px; color: #333;">${company}</td>
                            </tr>
                            ` : ''}
                            <tr style="border-bottom: 1px solid #e9ecef;">
                                <td style="padding: 12px 15px; font-size: 14px; font-weight: bold; color: #333;">Email:</td>
                                <td style="padding: 12px 15px; font-size: 14px; color: #333;">${email}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e9ecef;">
                                <td style="padding: 12px 15px; font-size: 14px; font-weight: bold; color: #333;">Phone:</td>
                                <td style="padding: 12px 15px; font-size: 14px; color: #333;">${phone}</td>
                            </tr>
                            
                            <!-- Project Details -->
                            <tr style="background-color: #f8f9fa;">
                                <td colspan="2" style="padding: 15px; font-size: 16px; font-weight: bold; color: #2C3E50;">Project Details</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e9ecef;">
                                <td style="padding: 12px 15px; font-size: 14px; font-weight: bold; color: #333;">Project Type:</td>
                                <td style="padding: 12px 15px; font-size: 14px; color: #333;">${projectType}</td>
                            </tr>
                            ${projectSize ? `
                            <tr style="border-bottom: 1px solid #e9ecef;">
                                <td style="padding: 12px 15px; font-size: 14px; font-weight: bold; color: #333;">Project Size:</td>
                                <td style="padding: 12px 15px; font-size: 14px; color: #333;">${projectSize}</td>
                            </tr>
                            ` : ''}
                            ${location ? `
                            <tr style="border-bottom: 1px solid #e9ecef;">
                                <td style="padding: 12px 15px; font-size: 14px; font-weight: bold; color: #333;">Location:</td>
                                <td style="padding: 12px 15px; font-size: 14px; color: #333;">${location}</td>
                            </tr>
                            ` : ''}
                            ${budget ? `
                            <tr style="border-bottom: 1px solid #e9ecef;">
                                <td style="padding: 12px 15px; font-size: 14px; font-weight: bold; color: #333;">Budget:</td>
                                <td style="padding: 12px 15px; font-size: 14px; color: #333;">${budget}</td>
                            </tr>
                            ` : ''}
                            
                            <!-- Appointment Preferences -->
                            <tr style="background-color: #f8f9fa;">
                                <td colspan="2" style="padding: 15px; font-size: 16px; font-weight: bold; color: #2C3E50;">Appointment Preferences</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e9ecef;">
                                <td style="padding: 12px 15px; font-size: 14px; font-weight: bold; color: #333;">Preferred Date:</td>
                                <td style="padding: 12px 15px; font-size: 14px; color: #333;">${formattedDate}</td>
                            </tr>
                            ${preferredTime ? `
                            <tr style="border-bottom: 1px solid #e9ecef;">
                                <td style="padding: 12px 15px; font-size: 14px; font-weight: bold; color: #333;">Preferred Time:</td>
                                <td style="padding: 12px 15px; font-size: 14px; color: #333;">${preferredTime}</td>
                            </tr>
                            ` : ''}
                            
                            <!-- Project Description -->
                            <tr style="background-color: #f8f9fa;">
                                <td colspan="2" style="padding: 15px; font-size: 16px; font-weight: bold; color: #2C3E50;">Project Description</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding: 20px 15px; font-size: 14px; color: #333; line-height: 1.8;">${projectDescription.replace(/\n/g, '<br>')}</td>
                            </tr>
                            
                            <!-- Additional Information -->
                            <tr style="background-color: #f8f9fa;">
                                <td colspan="2" style="padding: 15px; font-size: 16px; font-weight: bold; color: #2C3E50;">Additional Information</td>
                            </tr>
                            ${howDidYouHear ? `
                            <tr style="border-bottom: 1px solid #e9ecef;">
                                <td style="padding: 12px 15px; font-size: 14px; font-weight: bold; color: #333;">How they heard about us:</td>
                                <td style="padding: 12px 15px; font-size: 14px; color: #333;">${howDidYouHear}</td>
                            </tr>
                            ` : ''}
                            <tr>
                                <td style="padding: 12px 15px; font-size: 14px; font-weight: bold; color: #333;">Newsletter Subscription:</td>
                                <td style="padding: 12px 15px; font-size: 14px; color: #333;">${newsletter ? 'Yes' : 'No'}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr style="background-color: #f8f9fa; border-top: 2px solid #ddd;">
                                <td colspan="2" style="text-align: center; padding: 15px; font-size: 12px; color: #666;">
                                    This appointment request was submitted through the AWK Corporation website.<br>
                                    Please respond within 24 hours to confirm the consultation.
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </body>
            </html>
        `,
    };

    // Email to user (confirmation)
    const userMailOptions = {
        from: `"AWK Corporation" <${process.env.MAIL_USER}>`,
        to: email,
        subject: 'Appointment Request Confirmation - AWK Corporation',
        html: `
            <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0;">
                    <table role="presentation" cellpadding="10" cellspacing="0" width="100%" style="max-width: 700px; margin: 50px auto 0; background-color: #fff; border: 1px solid #ddd; border-radius: 8px;">
                        <thead>
                            <tr style="background: linear-gradient(135deg, #E40C29 0%, #2C3E50 100%); border-bottom: 2px solid #ddd;">
                                <th style="text-align: center; font-size: 18px; font-weight: bold; color: white; padding: 15px 0;">Thank You for Your Appointment Request</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 30px 20px;">
                                    <p style="font-size: 16px; color: #333; margin-bottom: 20px;">Dear ${firstName} ${lastName},</p>
                                    
                                    <p style="font-size: 15px; color: #555; margin-bottom: 20px; line-height: 1.8;">
                                        Thank you for requesting a consultation with <strong>AWK Corporation</strong>. We have received your appointment request and our team will review it shortly.
                                    </p>
                                    
                                    <div style="background: #f8f9fa; border-left: 4px solid #E40C29; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0;">
                                        <h3 style="color: #2C3E50; margin-top: 0; margin-bottom: 15px;">Request Summary</h3>
                                        <p style="margin: 8px 0; color: #555;"><strong>Project Type:</strong> ${projectType}</p>
                                        ${projectSize ? `<p style="margin: 8px 0; color: #555;"><strong>Project Size:</strong> ${projectSize}</p>` : ''}
                                        ${preferredDate ? `<p style="margin: 8px 0; color: #555;"><strong>Preferred Date:</strong> ${formattedDate}</p>` : ''}
                                        ${preferredTime ? `<p style="margin: 8px 0; color: #555;"><strong>Preferred Time:</strong> ${preferredTime}</p>` : ''}
                                    </div>
                                    
                                    <p style="font-size: 15px; color: #555; margin-bottom: 20px; line-height: 1.8;">
                                        <strong>What happens next?</strong><br>
                                        1. Our team will review your project requirements within 24 hours<br>
                                        2. We will contact you to confirm the consultation details<br>
                                        3. We'll prepare initial insights and recommendations for our discussion
                                    </p>
                                    
                                    <p style="font-size: 15px; color: #555; margin-bottom: 25px; line-height: 1.8;">
                                        If you have any urgent questions or need to update your information, please don't hesitate to contact us directly at <strong>(403) 497-5725</strong> or reply to this email.
                                    </p>
                                    
                                    <div style="text-align: center; margin: 30px 0;">
                                        <a href="tel:4034975725" style="display: inline-block; background: #E40C29; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 15px; transition: background 0.3s ease;">
                                            Call Us Now: (403) 497-5725
                                        </a>
                                    </div>
                                    
                                    <p style="font-size: 15px; color: #555; margin-bottom: 10px; line-height: 1.8;">
                                        Best regards,<br>
                                        <strong>The AWK Corporation Team</strong><br>
                                        <span style="color: #666; font-style: italic;">Streamlining infrastructure, construction, and procurement through strategic planning and precise execution.</span>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr style="background-color: #f8f9fa; border-top: 2px solid #ddd;">
                                <td style="text-align: center; padding: 15px; font-size: 12px; color: #666;">
                                    © ${new Date().getFullYear()} AWK Corporation. All rights reserved.<br>
                                    Unit 175 - 5005 Dalhousie Dr NW, Calgary, AB T3A 5RB, Canada
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
        
        return NextResponse.json({ 
            success: true,
            message: "Appointment request submitted successfully! We will contact you within 24 hours." 
        }, { status: 200 });
    } catch (error) {
        console.error("Appointment mail error:", error);
        return NextResponse.json({ 
            success: false,
            message: "Failed to submit appointment request. Please try again later." 
        }, { status: 500 });
    }
}