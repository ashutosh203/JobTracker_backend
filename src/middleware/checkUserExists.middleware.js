/** @format */

import { CandidateHelper } from '../models/candidate.models.js';
import Candidate from '../schema/candidate_Create_Account_Schema.js';
import Recruiter from '../schema/recruiter_Create_Account_Schema.js';

export const checkUserExists = async (req, res, next) => {
 if (req.body.role === 'candidate') {
  const Helper = new CandidateHelper();
  const { email, phone } = req.body;
  // console.log('this first');
  const messages2 = await Recruiter.exists({ email: email }); // userExist
  const messages = await Helper.UserExists(email, phone); // userExist

  messages
   ? res.status(400).json(messages)
   : messages2
     ? res
        .status(400)
        .json({
         messages: 'Your Email all ready exist',
         succuss: false,
         email: true,
        })
     : next();
 } else {
  const { email } = req.body;
  const messages = await Recruiter.exists({ email: email });
  const emailExists = await Candidate.exists({ email: email });
  messages
   ? res.status(400).json({
     succuss: false,
     email : true,
      messages: 'Email all ready exist',
     })
   : emailExists
     ? res.status(400).json({
       succuss: false,
       email: true , 
        messages: 'Email all ready exist',
       })
     : next();
 }
};
