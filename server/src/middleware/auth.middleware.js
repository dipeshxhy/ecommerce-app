import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const hashPassword =  (password) => {
    return   bcrypt.hash(password, 10);
}
export const comparePassword =  (password, hashPassword) => {
    return   bcrypt.compare(password, hashPassword);
}

export const generateToken = (user,res) => {
    const token= jwt.sign({id:user._id,role:user.role,email:user.email},process.env.JWT_SECRET,{expiresIn:'30d'});
    res.cookie('token',token,{secure:process.env.NODE_ENV!="development",httpOnly:true,maxAge:30*24*60*60*1000,sameSite:'strict'});
    return token;
}
export const protect = async (req, res, next) => {
    const token =  req.cookies.token;
   
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
       
      

        req.user=decoded;
        next();
    }catch(error){
        return res.status(401).json({message:"Unauthorized"});
    }
}
const adminCheck = (req, res, next) => {
    if(req.user && req.user.role==='admin'){
        next();
    }else{
        return res.status(401).json({message:"Unauthorized"});
    }
}