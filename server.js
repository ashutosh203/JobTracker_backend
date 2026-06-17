/** @format */

import dotenv from 'dotenv';
import app from './src/app.js';
import connectDB from './src/config/db.js';
import './src/utils/log.js';

dotenv.config();

connectDB();

const PORT = process.env.PORT || 45000;

app.listen(process.env.PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
