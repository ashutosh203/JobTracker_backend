/** @format */

import Jobs from '../schema/recruiterJobCreateschema.js';

export const recruiterJobsListing = async (req, res) => {
 try {
  const { _id: recruiterId } = req.user;

  const jobs = await Jobs.find({   recruiterId  }).select('JobTitle JobType');

 

  return res.status(200).json({
   success: true,
   jobs,
  });
 } catch (error) {
  console.error('Recruiter Jobs Listing Error:', error);

  return res.status(500).json({
   success: false,
   message: 'Internal Server Error',
  });
 }
};
