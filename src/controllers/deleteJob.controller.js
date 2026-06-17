/** @format */

import Jobs from "../schema/recruiterJobCreateschema.js";


export const deleteJob = async (req, res) => {
 try {
  const { id } = req.params;
  const { _id: recruiterId } = req.user;

  const deletedJob = await Jobs.findOneAndDelete({
   _id: id,
   recruiterId,
  });

  if (!deletedJob) {
   return res.status(404).json({
    success: false,
    message: 'Job not found',
   });
  }

  return res.status(200).json({
   success: true,
   message: 'Job deleted successfully',
  });
 } catch (error) {
  console.error('Delete Job Error:', error);

  return res.status(500).json({
   success: false,
   message: 'Internal Server Error',
  });
 }
};
