import * as dotenv from 'dotenv';
dotenv.config();

import server from './server.js';
import connectDB from './utils/db.js';

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
})