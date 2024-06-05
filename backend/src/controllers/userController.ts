import express, { Request,Response,NextFunction } from "express";
import User from "../models/User.js";
import {hash,compare} from "bcrypt";
import {createToken} from "../utils/tokenManager.js";
import {COOKIE_NAME, DOMAIN_NAME, PATH} from "../utils/constants.js";

export const getUserList = async (
    req: Request,
    res: Response,
    next: NextFunction
)=>{

    try {
        const users = await User.find();
        return res.status(200).json({message:"OK", users})
    } catch (error) {
        console.log(error)
        return res.status(200).json({message:"ERROR", error})
    }

}
export const registerUser = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const {name, email, password} = req.body;
        const saltedPassword = await hash(password,10);
        const existingUser = User.findOne({email});
        if(existingUser) return res.status(401).json({messageCode :"ERROR", message:"User already exists"});
        const user = new User({name, email, password: saltedPassword});
        await user.save();

        const token = createToken(user.id.toString(), user.email.toString(), "7d");
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate()+7);
        res.clearCookie(COOKIE_NAME,{
            httpOnly:true,
            signed:true,
            path:PATH,
            domain:DOMAIN_NAME,
        });
        res.cookie(COOKIE_NAME,token,{
            path:PATH,
            domain:DOMAIN_NAME,
            expires: expiryDate,
            httpOnly:true,
            signed: true,
        });
        return res.status(201).json({messageCode:"OK", name:user.name, email:user.email});
    }catch(error){
        console.log(error);
        return res.status(200).json({messageCode:"ERROR", error})
    }
}

export const loginUser = async(req: Request, res:Response, next: NextFunction)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});

    if(!user) return res.status(403).json({messageCode:"ERROR", message:"User not found"});
    const validatePassword = await compare(password, user.password);
    if(!validatePassword) return res.status(401).json({messageCode:"ERROR", message:"Passwords do not match"});

    const token = createToken(user.id.toString(), user.email.toString(), "7d");
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate()+7);
    res.clearCookie(COOKIE_NAME,{
        httpOnly:true,
        signed:true,
        path:PATH,
        domain:DOMAIN_NAME,
    });
    res.cookie(COOKIE_NAME,token,{
        path:PATH,
        domain:DOMAIN_NAME,
        expires: expiryDate,
        httpOnly:true,
        signed: true,
    });

    return res.status(200).json({messageCode:"OK", token});
}