/** @format */

import Candidate from '../schema/candidate_Create_Account_Schema.js';

export class CandidateHelper {
 async UserExists(email, phone) {
  const emailExists = await Candidate.exists({ email: email });
  const phoneExists = await Candidate.exists({ phone: phone });
  if (emailExists && phoneExists) {
   return {
    message: 'Email and phone already registered',
    email: true,
    phone: true,
   };
  } else if (emailExists) {
   return {
    message: 'Email already registered',
    email: true,
    phone: false,
   };
  } else if (phoneExists) {
   return {
    message: 'Phone already registered',
    email: false,
    phone: true,
   };
  } else {
   return false;
  }
 }

 FieldValidation(name, email, phone, password) {
  if (password === null) {
   const value = [name, email, phone];
   if (!name?.trim() || !email?.trim() || !phone?.trim()) {
    return {
     message: 'All fields are required',
     name: !name || !name?.trim(),
     email: !email || !email?.trim(),
     phone: !phone || !phone?.trim(),
    };
   } else if (value) {
    let message;
    for (let i = 0; i < value.length; i++) {
     const validation = this.Validate(value[i]);
     if (validation) {
      message = validation;
      break;
     }
    }
    return message;
   } else {
    return false;
   }
  } else {
   const value = [name, email, phone, password];
   if (!name.trim() || !email.trim() || !phone.trim() || !password.trim()) {
    return {
     message: 'All fields are required',
     name: !name,
     email: !email,
     phone: !phone,
     password: !password,
    };
   } else if (value) {
    let message;
    for (let i = 0; i < value.length; i++) {
     const validation = this.Validate(value[i]);
     if (validation) {
      message = validation;
      break;
     }
    }
    return message;
   } else {
    return false;
   }
  }
 }

 Validate(value) {
  switch (value) {
   case 'name':
    if (/^[a-zA-Z\s]+$/.test(value)) {
     return {
      message: 'Name should contain only letters and spaces',
      name: false,
     };
    } else if (value.length < 3 || value.length > 30) {
     return {
      message: 'Name should be between 2 and 30 characters',
      name: false,
     };
    }
    return false;
   case 'email':
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
     return {
      message: 'Invalid email format',
      email: false,
     };
    }
    return false;
   case 'phone':
    if (/^\d{10}$/.test(value)) {
     return {
      message: 'only number allowed',
      email: false,
     };
    }
   case 'password':
    if (password.length === 5) {
     return {
      message: 'Password max 5 Latter',
      email: false,
     };
    }
   default:
    return false;
  }
 }
}
