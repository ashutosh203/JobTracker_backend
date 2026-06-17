/** @format */

/** @format */

import jobsApply from '../schema/candidate_jobs_Apply_Schema.js';

export const AppliedJobsCandidateDetails = async (req, res) => {
 try {
  const { id } = req.params;

  const allAppliedCandidate = await jobsApply
   .find({ JobsId: id })
   .populate('candidateId', 'Name email phone')
   .populate('JobsId', 'JobTitle')
   .sort({ createdAt: -1 });

  return res.status(200).json({
   success: true,
   totalApplicants: allAppliedCandidate.length,
   candidates: allAppliedCandidate,
  });
 } catch (error) {
  console.error('AppliedJobsCandidateDetails Error:', error);

  return res.status(500).json({
   success: false,
   message: 'Internal Server Error',
  });
 }
};