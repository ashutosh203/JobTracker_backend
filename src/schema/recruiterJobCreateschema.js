/** @format */

import mongoose from 'mongoose';

const recruitersJobsSchema = new mongoose.Schema(
 {
  companyName: {
   type: String,
   required: [true, 'Company Name is required'],
   trim: true,
  },

  JobTitle: {
   type: String,
   required: [true, 'Job Title is required'],
   trim: true,
  },

  Location: {
   type: String,
   required: [true, 'Location is required'],
   trim: true,
  },
  address: {
   type: String,
   required: [true, 'Address is required'],
   trim: true,
  },
  JobType: {
   type: String,
   required: [true, 'Job Type is required'],
  },

  IndustryType: {
   type: String,
   required: [true, 'Industry Type is required'],
   trim: true,
  },

  Established: {
   type: String,
   required: [true, 'Established Year is required'],
  },

  Organization: {
   type: String,
   required: [true, 'Organization Type is required'],
   trim: true,
  },

  PerksBenefits: {
   type: String,
  },

  JobDetails: {
   type: String,
   required: [true, 'Job Details are required'],
   trim: true,
  },
  recruiterId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Recruiter',
   required: true,
  },
 },
 {
  timestamps: true,
 },
);

const Jobs = mongoose.model('Jobs', recruitersJobsSchema);
export default Jobs;
