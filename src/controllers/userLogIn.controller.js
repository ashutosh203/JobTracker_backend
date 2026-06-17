/** @format */

import Candidate from '../schema/candidate_Create_Account_Schema.js';
import Recruiter from '../schema/recruiter_Create_Account_Schema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const userLogIn = async (req, res) => {
 try {
  const { email, password } = req.body;

  const recruiter = await Recruiter.findOne({ email });
  const candidate = await Candidate.findOne({ email });

  console.log(recruiter, candidate);

  if (!recruiter && !candidate) {
   return res.status(404).json({
    success: false,
    message: 'User not found',
   });
  }

  const generateToken = (user) => {
   return jwt.sign(
    {
     role: user.role,
     _id: user._id,
     email: user.email,
    },
    process.env.JWT_SECRET,
    {
     expiresIn: process.env.expires,
    },
   );
  };

  // Recruiter Login
  if (recruiter) {
   const recruiterPassword = await Recruiter.findOne({ email }).select(
    'password',
   );
   const isMatch = await bcrypt.compare(password, recruiterPassword.password);

   if (!isMatch) {
    return res.status(401).json({
     success: false,
     message: 'Invalid password',
    });
   }

   const token = await generateToken(recruiter);

   return res.status(200).json({
    success: true,
    message: 'login successful',
    role: recruiter.role,
    token,
   });
  }

  // Candidate Login
  if (candidate) {
   const candidatePassword = await Candidate.findOne({ email }).select(
    'password',
   );
   const isMatch = await bcrypt.compare(password, candidatePassword.password);

   if (!isMatch) {
    return res.status(401).json({
     success: false,
     message: 'Invalid password',
    });
   }
   const token = await generateToken(candidate);

   return res.status(200).json({
    success: true,
    message: 'login successful',
    role : candidate.role,
    token,
   });
  }
 } catch (error) {
  console.error('Login Error:', error);

  return res.status(500).json({
   success: false,
   message: 'Internal Server Error',
  });
 }
};
