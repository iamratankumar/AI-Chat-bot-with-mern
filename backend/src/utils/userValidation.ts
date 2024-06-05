import {body, ValidationChain, validationResult} from "express-validator";
import express from "express";

export const validate =(validations: ValidationChain[])=>{
    return async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        for(let validation of validations){
            const result = await validation.run(req);
            if(!result.isEmpty())break;
        }
        const err = validationResult(req);
        if(err.isEmpty()){
            return next();
        }else
        return res.status(422).json({error:err.array()});
    }
}
export const loginValidation = [
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({min: 6}).withMessage("Password should be at least 6 characters"),
]

export const registerValidation = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidation,
]