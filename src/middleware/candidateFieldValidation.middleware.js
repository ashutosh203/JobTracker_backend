/** @format */
import { CandidateHelper } from '../models/candidate.models.js';

export async function candidateFieldValidation(req, res, next) {
    const { role, name, email, phone, password = null } = req.body;

    if (role === 'candidate') {
        const Helper = new CandidateHelper();
        // fieldValidation
        const value = Helper.FieldValidation(name, email, phone, password);

        if (value) {
            res.status(400).json(value);
        } else {
            console.log('all clear field');
            next();
        }
    }
}
