/** @format */

import express from 'express';
import { checkUserExists } from '../middleware/checkUserExists.middleware.js';
import { recruiterDataValidation } from '../middleware/recruiterDataValidation.middleware.js';
import { recruiterAccountCreate } from '../controllers/recruiterAccountCreate.controller.js';
import verifyToken from '../middleware/verifyToken.js';
import { recruiterProfile } from '../controllers/recruiterProfile.controller.js';
import { jobsValidation } from '../middleware/jobsValidation.middleware.js';
import { jobCreate } from '../controllers/jobCreate.controller.js';
import { recruiterJobsListing } from '../controllers/recruiterJobsListing.controllers.js';
import { recruiterJobDetails } from '../controllers/recruiterJobDetails.controller.js';
import { deleteJob } from '../controllers/deleteJob.controller.js';
import { AppliedJobsCandidateDetails } from '../controllers/AppliedJobsCandidateDetails.controller.js';
import { upDataCandidateStatus } from '../controllers/upDataCandidateStatus.controller.js';
const recruiterCreateAccount = express.Router();



recruiterCreateAccount.post('/recruiterAccountCreate', checkUserExists, recruiterDataValidation, recruiterAccountCreate);
recruiterCreateAccount.get('/recruiterProfile', verifyToken, recruiterProfile);
recruiterCreateAccount.post('/jobsCreate', verifyToken , jobsValidation, jobCreate );
recruiterCreateAccount.get('/jobListing', verifyToken , recruiterJobsListing );
recruiterCreateAccount.get('/jobDetails/:id', verifyToken , recruiterJobDetails );
recruiterCreateAccount.delete('/jobDelete/:id', verifyToken, deleteJob);
recruiterCreateAccount.get(
 '/viewAppliedJobsCandidateDetails/:id',
 verifyToken,
 AppliedJobsCandidateDetails,
);
recruiterCreateAccount.patch(
 '/upDataCandidateStatus',
 verifyToken,
 upDataCandidateStatus,
);

export { recruiterCreateAccount };

/*
path : '/ReSingUp/emailVerify'
path : '/ReSingUp/recruiterAccountCreate'
path : '/ReSingUp/recruiterProfile'
path : '/ReSingUp/jobsCreate'
*/
