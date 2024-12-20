import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
const app=express();
app.use(morgan('dev'));

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization',
        'Cache-Control', 'Expires', 'Pragma'
    ],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//api
app.use("/api/auth",authRoutes)

export default app;