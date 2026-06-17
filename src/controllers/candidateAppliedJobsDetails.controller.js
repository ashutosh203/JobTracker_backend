/** @format */

import jobsApply from '../schema/candidate_jobs_Apply_Schema.js';

export const candidateAppliedJobsDetails = async (req, res) => {
 try {
  const { _id } = req.user;

  const jobs = await jobsApply.find({ candidateId: _id }).populate({
   path: 'JobsId',
   select: 'companyName JobTitle Location JobType',
  });

  return res.status(200).json({
   success: true,
   totalJobs: jobs.length,
   jobs,
  });
 } catch (error) {
  console.error('Applied Jobs Error:', error);

  return res.status(500).json({
   success: false,
   message: 'Internal Server Error',
  });
 }
};
