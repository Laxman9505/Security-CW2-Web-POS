/** @format */

import express from "express";
import {
  login,
  onBoardUser,
  sendOtpCodeToEmailOnBoarding,
} from "../contollers/authController";
import upload from "../services/multer-config";

const router = express.Router();

// Endpoint to send OTP code to user's email during registration
router.post("/send-otp", sendOtpCodeToEmailOnBoarding);

// Endpoint to onboard a user
router.post("/onboard", upload.single("image"), onBoardUser);

// Endpoint to login a user
router.post("/login", login);

export default router;
