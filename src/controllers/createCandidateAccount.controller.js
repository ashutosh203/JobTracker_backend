/** @format */

import Candidate from '../schema/candidate_Create_Account_Schema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const createCandidateAccount = async (req, res) => {
    try {
        const { role, name, email, phone, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const candidate = await Candidate.create({
            role,
            Name: name,
            email,
            phone,
            password: hashedPassword,
        });

        const token = jwt.sign(
            {
                role: candidate.role,
                _id: candidate._id,
                Email: candidate.email,
            },

            process.env.JWT_SECRET,
            {
                expiresIn: process.env.expires,
            },
        );

        return res.status(201).json({
            success: true,
            message: 'Account Created Successfully',
            data: {
                id: candidate._id,
                role: candidate.role,
                name: candidate.Name,
                email: candidate.email,
                phone: candidate.phone,
                token,
            },
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};
