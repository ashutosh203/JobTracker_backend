/** @format */

import { CandidateHelper } from '../models/candidate.models.js';
import Candidate from '../schema/candidate_Create_Account_Schema.js';

export const checkUserExists = async (req, res, next) => {
    const { role, email, phone } = req.body;
    const Helper = new CandidateHelper();
    if (role === 'candidate') {
        console.log("this first")
        const massages = await Helper.UserExists(email, phone);
        massages
            ? res.status(400).json(massages)
            : next();
    }
};
