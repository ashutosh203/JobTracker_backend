/** @format */

import express from 'express';
import cors from 'cors';

import { createAccount } from './routes/createAccount.route.js';
import { recruiterCreateAccount } from './routes/recruiterCreateAccount.route.js';
import { userLogInDataValidation } from './middleware/userLogInDataValidation.middleware.js';
import { userLogIn } from '../src/controllers/userLogIn.controller.js';
import { checkTokenExpires } from './controllers/checkTokenExpires.controller.js';
import { allJobsDetails } from './controllers/allJobsDetails.controller.js';
import { candidateJobDetail } from './controllers/candidateJobDetail.controller.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', createAccount);// CANDIDATE ACCOUNT CREATE
app.use('/ReSingUp', recruiterCreateAccount); // RECRUITER ACCOUNT CREATE
app.get('/AllJobsDetail', allJobsDetails)
app.get('/jobsDetail/:id', candidateJobDetail)
app.post('/tokenExpires', checkTokenExpires);
app.post('/login', userLogInDataValidation, userLogIn);
export default app;
