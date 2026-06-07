/** @format */

import express from 'express';


import { createAccount } from './routes/createAccount.route.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', createAccount);

export default app;
