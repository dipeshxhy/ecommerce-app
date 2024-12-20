import { comparePassword, generateToken, hashPassword } from "../middleware/auth.middleware.js";
import User from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const {userName,email,password} = req.body;
    if(!userName || !email || !password){
      return res.status(400).json({ message: "All fields are required" });
    }
    const userExist= await User.findOne({userName});
    const emailExist = await User.findOne({ email });
    if (emailExist || userExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await hashPassword(password);
    const user = await User.create({ userName,email, password: hashedPassword });
    if(user){
const token =  generateToken(user,res);
      return res.status(201).json({ message: "User created successfully",token, data: user });
    }else{
      return res.status(400).json({ message: "User creation failed" });
    }
    
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
    
  }
}
  



export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }
  const isMatch = await comparePassword(password, user.password);

  try {
    if (user && isMatch) {
      const token =  generateToken(user,res);
      return res
        .status(201)
        .json({ message: "User Login successfully",token, data: user });
    } else {
      return res.status(400).json({ message: "User Login failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

//logout
export const logoutUser = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    expires: new Date(0),
  });
  return res.status(200).json({ message: "User Logout successfully" });
};


//auth check
export const checkAuth = async (req, res) => {
  const user = req.user;
  if(user){
    return res.status(200).json({user})
  }else{
    return res.status(404).json({message:"User not authenticated"})
  }
}