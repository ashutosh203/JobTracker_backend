/** @format */

import mongoose from 'mongoose';

const candidateJobsApply = mongoose.Schema(
 {
  candidateId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Candidate',
   required: true,
  },
  JobsId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Jobs',
   required: true,
  },
  recruiterId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Recruiter',
   required: true,
  },
  status: {
   type: String,
   enum: [
    'Applied',
    'Under Review',
    'Shortlisted',
    'Interview Scheduled',
    'Rejected',
    'Selected',
   ],
   default: 'Applied',
  },
 },
 {
  timestamps: true,
 },
);

const jobsApply = mongoose.model('jobsApply', candidateJobsApply);
export default jobsApply;
