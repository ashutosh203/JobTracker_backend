/** @format */

import jobsApply from '../schema/candidate_jobs_Apply_Schema.js';

export const upDataCandidateStatus = async (req, res) => {
 try {
  const { id: _id, status } = req.body;

  const updatedCandidate = await jobsApply.findByIdAndUpdate(
   _id,
   {
    status,
   },
   {
    new: true,
   },
  );

  if (!updatedCandidate) {
   return res.status(404).json({
    success: false,
    message: 'Application not found',
   });
  }

  return res.status(200).json({
   success: true,
   message: 'Status updated successfully',
   data: updatedCandidate,
  });
 } catch (error) {
  console.error(error);

  return res.status(500).json({
   success: false,
   message: 'Internal Server Error',
  });
 }
};
