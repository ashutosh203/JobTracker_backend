/** @format */

import Jobs from '../schema/recruiterJobCreateschema.js';

export const recruiterJobDetails = async (req, res) => {
 try {
  const { id } = req.params;
  const { _id: recruiterId } = req.user;

  const job = await Jobs.findOne({
   _id: id,
   recruiterId,
  });

  if (!job) {
   return res.status(404).json({
    success: false,
    message: 'Job not found',
   });
  }

  return res.status(200).json({
   success: true,
   job,
  });
 } catch (error) {
  console.error('Recruiter Job Details Error:', error);

  return res.status(500).json({
   success: false,
   message: 'Internal Server Error',
  });
 }
};
