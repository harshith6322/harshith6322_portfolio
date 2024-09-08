import { createTransport } from "nodemailer";
import dotenv from "dotenv";
import { rateLimit } from "express-rate-limit";
import zod from "zod";
import express from "express";
import { createServer } from "vercel";

dotenv.config();
const app = express();

app.use(express.json());

// Rate limiting setup
const rateemail = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const zodemail = zod.object({
  fullname: zod.string().min(3),
  email: zod.string().email().trim().min(3),
  message: zod.string().min(3),
});

app.post("/api/send-email", rateemail, (req, res) => {
  const body = req.body;
  const { success, error } = zodemail.safeParse(body);
  if (!success) {
    return res.status(400).json({
      status: 400,
      error: "wrong inputs",
      message: error.issues[0].message,
    });
  }

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Message from ${body.fullname}`,
    text: `Message from ${body.fullname} (${body.email}): ${body.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Error sending email", error });
    }
    res.status(200).json({ message: "Email sent successfully" });
  });
});

export default createServer(app);
