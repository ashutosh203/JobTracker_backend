/** @format */

export const jobsValidation = async (req, res, next) => {
 const {
  JobTitle,
  JobType,
  IndustryType,
  Established,
  Organization,
  PerksBenefits,
  JobDetails,
 } = req.body;

console.log(req.body)

 if (
  !JobTitle?.trim() ||
  !JobType?.trim() ||
  !IndustryType?.trim() ||
  !Organization?.trim() ||
  !JobDetails?.trim() ||
  !Established?.trim()
 ) {
  return res.status(400).json({
   success: false,
   message: 'All required fields must be filled',
  });
 } else {
  next()
 }
};
