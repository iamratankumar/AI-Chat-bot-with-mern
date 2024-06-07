import jwt from 'jsonwebtoken'
import {NextFunction,Response, Request} from "express";
import {COOKIE_NAME} from "./constants.js";
export const createToken=(id:string,email:string, expiry: string = "7d")=>{
    return jwt.sign({id, email},process.env.JWT_SECRET,{expiresIn:expiry});
}

export const verifyToken=(req:Request ,res:Response, next:NextFunction) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    if(!token || token.trim() ==""){
        return res.status(401).json({messageCode:"Token Not Received"});
    }
    return new Promise<void>((resolve, reject)=>{
        return jwt.verify(token, process.env.JWT_SECRET, (err, success)=>{
            if(err){
                reject(err.message);
                return res.status(401).send("Authentication failed");
            }else{
                resolve();
                res.locals.jwtData = success;
                return next();
            }
        })
    })
}