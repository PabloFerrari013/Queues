import nodemailer from "nodemailer";
import { env } from "../env";

export function transporter() {
  return nodemailer.createTransport({
    host: env.MAILTRAP_HOST,
    port: env.MAILTRAP_HOST_PORT,
    auth: {
      user: env.MAILTRAP_HOST_USER,
      pass: env.MAILTRAP_HOST_PASS,
    },
  });
}
