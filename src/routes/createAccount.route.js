/** @format */

import express from 'express';
import { checkUserExists } from '../middleware/checkUserExists.middleware.js';
import { candidateFieldValidation } from '../middleware/candidateFieldValidation.middleware.js';
import { verifyEmail } from '../controllers/verifyEmail.controller.js';
import { verifyEmailOtp } from '../controllers/verifyEmailOtp.controller.js';
import { createCandidateAccount } from '../controllers/createCandidateAccount.controller.js';

const createAccount = express.Router();

createAccount.post(
    '/emailVerify',
    checkUserExists,
    candidateFieldValidation,
    verifyEmail,
);
createAccount.post('/verifyOtp', verifyEmailOtp);
createAccount.post(
    '/createAccount',
    checkUserExists,
    candidateFieldValidation,
    createCandidateAccount,
);

export { createAccount };
