/** @format */

export const userLogInDataValidation = async (req, res, next) => {
 const { email, password } = req.body;

 if (!email?.trim() || !password?.trim()) {
  return res.status(400).json({
   success: false,
   message: 'Email and Password are required',
  });
 }

 next();
};
