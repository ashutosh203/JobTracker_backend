/** @format */

import Candidate from '../schema/candidate_Create_Account_Schema.js';
import bcrypt from 'bcrypt';

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

        return res.status(201).json({
            success: true,
            message: 'Account Created Successfully',
            data: {
                id: candidate._id,
                role: candidate.role,
                name: candidate.Name,
                email: candidate.email,
                phone: candidate.phone,
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
