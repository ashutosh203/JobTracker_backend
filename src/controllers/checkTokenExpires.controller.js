/** @format */

import jwt from 'jsonwebtoken';
export const checkTokenExpires = async (req, res) => {
 try {
  const { token } = req.body;
  // console.log(token)
  const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
  // console.log('this is a token',verifyToken)
  if (verifyToken) {
   return res.status(200).json({
    success: true,
    token: 'this token is valid',
   });
  }
 } catch (error) {
  return res.status(401).json({
   success: false,
   message: 'This Token Is Expired',
  });
 }
};
