/** @format */

import express from 'express';
import { checkUserExists } from '../middleware/checkUserExists.middleware.js';
import { candidateFieldValidation } from '../middleware/candidateFieldValidation.middleware.js';
import { verifyEmail } from '../controllers/verifyEmail.controller.js';
import { verifyEmailOtp } from '../controllers/verifyEmailOtp.controller.js';
import { createCandidateAccount } from '../controllers/createCandidateAccount.controller.js';
import verifyToken from '../middleware/verifyToken.js';
import { candidateJobApply } from '../controllers/candidateJobApply.controller.js';
import { candidateAppliedJobsDetails } from '../controllers/candidateAppliedJobsDetails.controller.js';

const createAccount = express.Router();
createAccount.post(
 '/createAccount',
 checkUserExists,
 candidateFieldValidation,
 createCandidateAccount,
);
createAccount.post('/jobApply/:id', verifyToken, candidateJobApply);
createAccount.get(
 '/candidateAppliedJobsDetails',
 verifyToken,
 candidateAppliedJobsDetails,
);

export { createAccount };
