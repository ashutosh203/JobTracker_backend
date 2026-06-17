/** @format */

import mongoose from 'mongoose';

const recruiterAccount = new mongoose.Schema(
 {
  recruiterName: {
   type: String,
   required: [true, 'Recruiter Name is required'],
   trim: true,
  },
  companyName: {
   type: String,
   required: [true, 'companyName Name is required'],
   trim: true,
  },
  phone: {
   type: Number,
   required: [true, 'Phone number is required'],
   unique: true,
   match: [/^\d{10}$/, 'Phone number must be exactly 10 digits'],
  },
  email: {
   type: String,
   required: [true, 'Candidate Email is required'],
   unique: true,
   lowercase: true,
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
  address: {
   type: String,
  },
  location: {
   type: String,
  },
 },
 {
  timestamps: true,
 },
);

const Recruiter = mongoose.model('Recruiter', recruiterAccount);
export default Recruiter;
