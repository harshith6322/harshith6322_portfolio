// app.js

import express, { json } from "express";
import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
import { rateLimit } from "express-rate-limit";
import zod from "zod";
import cors from "cors";

const app = express();

app.use(json());
app.use(cors());

const rateemail = rateLimit({
  windowMs: 1 * 60 * 1000, // in 1 min
  limit: 10, // Limit each IP to 10 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Your email address
    pass: process.env.PASSWORD, // Your email password (App Password recommended)
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
      error: "Invalid input",
      message: error.issues[0].message,
    });
  }

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL, // Your email address to receive the email
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

export default app;
