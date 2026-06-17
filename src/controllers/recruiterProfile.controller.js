/** @format */

import Recruiter from '../schema/recruiter_Create_Account_Schema.js';

export const recruiterProfile = async (req, res) => {
 try {
  const { _id } = req.user;

  const profileData = await Recruiter.findById(_id);

  if (!profileData) {
   return res.status(404).json({
    success: false,
    message: 'Recruiter profile not found',
   });
  }

  return res.status(200).json({
   success: true,
   message: 'Profile fetched successfully',
   data: profileData,
  });
 } catch (error) {
  console.error('Recruiter Profile Error:', error);

  return res.status(500).json({
   success: false,
   message: error.message,
  });
 }
};
