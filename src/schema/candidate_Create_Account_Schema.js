/** @format */

import mongoose from 'mongoose';

const candidateAccount = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: [true, 'Candidate Name is required'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Candidate Email is required'],
            unique: true,
            lowercase: true,
        },
        phone: {
            type: Number,
            required: [true, 'Phone number is required'],
            unique: true,
            match: [/^\d{10}$/, 'Phone number must be exactly 10 digits'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [6, 'minimum 6 later is required'],
            select: false,
        },
        role: {
            type: String,
            required: [true, 'role is required'],
        },
    },
    {
        timestamps: true,
    },
);

const Candidate = mongoose.model('Candidate', candidateAccount);

export default Candidate;
