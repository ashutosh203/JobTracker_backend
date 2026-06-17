/** @format */

import jobsApply from '../schema/candidate_jobs_Apply_Schema.js';
import Jobs from '../schema/recruiterJobCreateschema.js';

export const candidateJobApply = async (req, res) => {
 try {
  const { id: JobsId } = req.params;
  const { _id } = req.user;

  // Already applied?
  const allReadyApply = await jobsApply.exists({
   JobsId,
   candidateId: _id,
  });

  if (allReadyApply) {
   return res.status(400).json({
    success: false,
    message: 'You have already applied for this job',
   });
  }

  // Job exists?
  const job = await Jobs.findById(JobsId).select('recruiterId');

  if (!job) {
   return res.status(404).json({
    success: false,
    message: 'Job not found',
   });
  }

  const apply = await jobsApply.create({
   candidateId: _id,
   JobsId,
   recruiterId: job.recruiterId,
  });

  return res.status(201).json({
   success: true,
   message: 'Application submitted successfully',
  
  });
 } catch (error) {
  console.log(error);

  return res.status(500).json({
   success: false,
   message: 'Server Error',
  });
 }
};
