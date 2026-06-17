/** @format */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import Recruiter from '../schema/recruiter_Create_Account_Schema.js';
export const recruiterAccountCreate = async (req, res) => {
 try {
  const {
   role,
   companyName,
   email,
   fullName,
   password,
   phoneNumber,
   location,
   address,
  } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const recruiter = await Recruiter.create({
   role,
   recruiterName: fullName,
   companyName: companyName,
   phone: phoneNumber,
   email: email,
   password: hashedPassword,
   location: location,
   address: address,
  });

  const token = jwt.sign(
   {
    role: recruiter.role,
    _id: recruiter._id,
    Email: recruiter.email,
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
    id: recruiter._id,
    role: recruiter.role,
    name: recruiter.recruiterName,
    company: recruiter.companyName,
    phone: recruiter.phone,
    email: recruiter.email,
    token,
   },
  });
 } catch (error) {
  // console.log(error);

  return res.status(500).json({
   success: false,
   message: 'Internal Server Error',
  });
 }
};
