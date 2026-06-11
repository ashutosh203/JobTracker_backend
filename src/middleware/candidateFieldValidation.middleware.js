/** @format */
import { CandidateHelper } from '../models/candidate.models.js';

export async function candidateFieldValidation(req, res, next) {
    const { role, name, email, phone, password = null } = req.body;
    console.log(req.body);
    if (role === 'candidate') {
        console.log('this first2');
        const Helper = new CandidateHelper();
        // fieldValidation
        const value = Helper.FieldValidation(name, email, phone, password);
        console.log(value);
        if (value) {
            res.status(400).json(value);
        } else {
            next();
        }
    }
}
