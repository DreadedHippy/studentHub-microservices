import express from "express";
import * as MailController from "../controllers/mail.js"

const router = express.Router();

router.post('/send', MailController.sendMail)

export default router