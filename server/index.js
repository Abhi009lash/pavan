import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Configure Nodemailer Transporter
const createTransporter = async () => {
  if (
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.SMTP_PASS.trim() !== ''
  ) {
    console.log(`📧 SMTP configured for: ${process.env.SMTP_USER}`);
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // Fallback Ethereal test transport for local development without credentials
  console.log('⚠️  SMTP_PASS is empty in .env. Creating Nodemailer Ethereal sandbox account...');
  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
};

let transporterPromise = createTransporter();

// Contact Form Email Submission Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, mobile, comment } = req.body;

  if (!name || !mobile || !comment) {
    return res.status(400).json({
      error: 'All fields (name, mobile, comment) are required.',
    });
  }

  try {
    const transporter = await transporterPromise;

    const recipientEmail = process.env.CONTACT_DEST_EMAIL || 'pavan.dsgn@gmail.com';
    const senderEmail = process.env.SMTP_USER || 'portfolio-contact@pavanportfolio.com';

    const mailOptions = {
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
    };

    const info = await transporter.sendMail(mailOptions);

    if (nodemailer.getTestMessageUrl(info)) {
      console.log('📧 Ethereal Preview URL:', nodemailer.getTestMessageUrl(info));
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!',
    });
  } catch (error) {
    console.error('Nodemailer Send Error:', error);
    return res.status(500).json({
      error: 'An error occurred while sending your message via Nodemailer. Please try again.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Nodemailer Contact API server running at http://localhost:${PORT}`);
});
