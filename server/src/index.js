import * as dotenv from 'dotenv';
dotenv.config();

import server from './server';
import connectDB from './utils/db.js';


server.listen(5000, () => {
    connectDB();
    console.log('Server is running on http://localhost:5000')
})