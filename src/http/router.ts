import express from "express";
import { EmailController } from "./controllers/email-controller";

export const router = express.Router();

const emailController = new EmailController();

router.post("/send/email", emailController.send);
