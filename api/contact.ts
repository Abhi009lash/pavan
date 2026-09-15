import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { name, mobile, comment } = body || {};

  if (!name || !mobile || !comment) {
    return res.status(400).json({
      error: 'All fields (name, mobile, comment) are required.',
    });
  }

  try {
    let transporter;

    if (
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.SMTP_PASS.trim() !== ''
    ) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      // Ethereal fallback for local/test serverless invocations
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const recipientEmail = process.env.CONTACT_DEST_EMAIL || 'pavan.dsgn@gmail.com';
    const senderEmail = process.env.SMTP_USER || 'portfolio-contact@pavanportfolio.com';

    await transporter.sendMail({
      from: `"Pavan Portfolio Contact" <${senderEmail}>`,
      to: recipientEmail,
      replyTo: senderEmail,
      subject: `New Portfolio Inquiry from ${name}`,
      text: `New Inquiry:\n\nName: ${name}\nMobile: ${mobile}\nMessage:\n${comment}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #eeeeee; border-radius: 12px;">
          <div style="background-color: #000000; padding: 16px 24px; border-radius: 8px; text-align: center; margin-bottom: 24px;">
            <h2 style="color: #F9C949; margin: 0; font-size: 20px; font-weight: bold;">New Portfolio Message</h2>
          </div>
          <div style="margin-bottom: 16px;">
            <p style="margin: 0 0 8px 0; color: #666666; font-size: 12px; text-transform: uppercase; font-weight: bold;">Sender Name</p>
            <p style="margin: 0; font-size: 16px; color: #111111; font-weight: 500;">${name}</p>
          </div>
          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 8px 0; color: #666666; font-size: 12px; text-transform: uppercase; font-weight: bold;">Mobile Number</p>
            <p style="margin: 0; font-size: 16px; color: #111111; font-weight: 500;">${mobile}</p>
          </div>
          <div style="margin-bottom: 24px; padding: 16px; background-color: #F9F9F9; border-left: 4px solid #F9C949; border-radius: 4px;">
            <p style="margin: 0 0 8px 0; color: #666666; font-size: 12px; text-transform: uppercase; font-weight: bold;">Message Comment</p>
            <p style="margin: 0; font-size: 15px; color: #222222; line-height: 1.6; white-space: pre-wrap;">${comment}</p>
          </div>
          <p style="font-size: 12px; color: #999999; text-align: center; margin-top: 32px; border-top: 1px solid #eeeeee; padding-top: 16px;">
            Sent automatically from Pavan Kumar Portfolio Contact Form.
          </p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!',
    });
  } catch (error: any) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({
      error: error.message || 'An error occurred while sending your message via Nodemailer.',
    });
  }
}
