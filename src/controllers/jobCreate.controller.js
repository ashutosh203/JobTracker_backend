/** @format */

import Recruiter from '../schema/recruiter_Create_Account_Schema.js';
import jobs from '../schema/recruiterJobCreateschema.js';

export const jobCreate = async (req, res) => {
 try {
  const {
   JobTitle,
   JobType,
   IndustryType,
   Established,
   Organization,
   PerksBenefits,
   JobDetails,
  } = req.body;
  const { _id: recruiterId } = req.user;
  const profile = await Recruiter.findById(recruiterId);
  // console.log(profile);
  const newJob = await jobs.create({
   companyName: profile.companyName,
   JobTitle,
   Location: profile.location,
   address: profile.address,
   JobType,
   IndustryType,
   Established,
   Organization,
   PerksBenefits,
   JobDetails,
   recruiterId: profile._id,
  });
  return res.status(201).json({
   success: true,
   message: 'Job created successfully',
   data: newJob,
  });
 } catch (error) {
  console.error('Job Create Error:', error);

  return res.status(500).json({
   success: false,
   message: 'Failed to create job',
   error: error.message,
  });
 }
};
