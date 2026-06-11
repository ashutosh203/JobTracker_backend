/** @format */

import nodemailer from 'nodemailer';
import Otp from '../schema/otpSchema.js';
import { CandidateHelper } from '../models/candidate.models.js';

export const verifyEmail = async (req, res, next) => {
    
    try {
        const { email, name } = req.body;

        const otp = Math.floor(100000 + Math.random() * 900000);
        console.log('otp is here ', otp);
        // delete existing otp for email
        await Otp.deleteMany({ email });
        // create otp in data base
        await Otp.create({
            email,
            otp,
            expiresAt: Date.now() + 5 * 60 * 1000,
        });

        // create service
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.APP_PASSWORD,
            },
        });

        // verify coaction
        await transporter.verify();
        console.log('SMTP Connected');

        // send to otp in your mail
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: 'OTP Verification',
            text: `${name}, Your OTP is ${otp}`,
        });
        // sand response to user
        res.status(200).json({
            message: 'OTP sent to Email',
            success: true,
        });
    } catch (error) {
        console.error('Error sending OTP email:', error);
        await Otp.deleteMany({ email });
        res.status(500).json({
            message: 'Failed to send OTP Email',
            success: false,
        });
    }
};
