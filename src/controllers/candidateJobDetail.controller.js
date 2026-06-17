/** @format */

import Jobs from '../schema/recruiterJobCreateschema.js';

export const candidateJobDetail = async (req, res) => {
 try {
  const { id } = req.params;
  const findJob = await Jobs.findById({ _id: id });

  if (!findJob) {
   return res.status(404).json({
    success: false,
    message: 'Job not found',
   });
  }

  return res.status(200).json({
   success: true,
   data: findJob,
  });
 } catch (error) {
  console.error('Error fetching job:', error);

  return res.status(500).json({
   success: false,
   message: 'Server Error',
   error: error.message,
  });
 }
};
