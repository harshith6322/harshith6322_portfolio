import express from "express";
import { createTransport } from "nodemailer";
import dotenv from "dotenv";
import { rateLimit } from "express-rate-limit";
import zod from "zod";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// const rateemail = rateLimit({
//   windowMs: 1 * 60 * 1000, // 1 minute
//   limit: 10, // Limit each IP to 10 requests per window
//   standardHeaders: true,
//   legacyHeaders: false,
//   validate: {
//     validationsConfig: false,
//     // ...
//     default: true,
//   },
// });
const rateemail = rateLimit({
  windowMs: 1 * 60 * 1000, // in 1min
  limit: 10, // Limit each IP to 10 requests per `window` (here, per minute)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
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

app.post("/send-email", rateemail, (req, res) => {
  const body = req.body;

  const { success, error } = zodemail.safeParse(body);
  if (!success)
    return res.status(400).json({
      status: 400,
      error: "wrong inputs",
      message: error.issues[0].message,
    });

  const mailOptions = {
    from: process.env.EMAIL, // Sender address
    to: process.env.EMAIL, // Your email address to receive the email
    subject: `Message from ${body.fullname}`, // Subject line
    text: `Message from ${body.fullname} (${body.email}): ${body.message}`, // Plain text body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error); // Log the error
      return res.status(500).json({ message: "Error sending email", error });
    }
    res.status(200).json({ message: "Email sent successfully" });
  });
});

export default app;
