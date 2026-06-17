/** @format */

import Jobs from '../schema/recruiterJobCreateschema.js';

export const allJobsDetails = async (req, res) => {
 try {
  const allJobs = await Jobs.find({})
   .select('JobTitle companyName Location JobType createdAt')
   .sort({ createdAt: -1 });

  return res.status(200).json({
   success: true,
   count: allJobs.length,
   data: allJobs,
  });
 } catch (error) {
  console.error('Error fetching jobs:', error);

  return res.status(500).json({
   success: false,
   message: 'Failed to fetch jobs',
   error: error.message,
  });
 }
};
