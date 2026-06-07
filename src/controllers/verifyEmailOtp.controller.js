/** @format */
import jwt from 'jsonwebtoken';
import Otp from '../schema/otpSchema.js';
export const verifyEmailOtp = async (req, res, next) => {
    try {
        const { email, otp } = req.body;

        const otpRecord = await Otp.findOne({
            email,
        });
        // console.log(otpRecord);

        if (!otpRecord) {
            return res.status(400).json({
                success: false,
                message: 'OTP Expired',
            });
        }

        if (otpRecord.otp !== otp) {
            return res.status(400).json({
                success: false,
                message: 'Invalid OTP',
            });
        }
        return res.status(200).json({
            success: true,
            message: 'OTP verified successfully',
        });
    } catch (error) {
        console.error('Error verifying OTP:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};
