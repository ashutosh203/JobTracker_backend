export const recruiterDataValidation = async (req, res, next) => {
 
 const { role, companyName, email, fullName, password, phoneNumber } = req.body;
 if (!role, !companyName, !email, !fullName, !password, !phoneNumber) {
  res.status(400).json({
   success: false,
   message : "all field are required"
  })
 } else {
  next()
 }

}