/** @format */

import express from 'express';
import cors from 'cors';

import { createAccount } from './routes/createAccount.route.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', createAccount);

export default app;
