import { Router } from "express";
import {authorizeUser, getUserList, loginUser, registerUser} from "../controllers/userController.js";
import {loginValidation, registerValidation, validate} from '../utils/userValidation.js'
import {verifyToken} from "../utils/tokenManager.js";

const userRouter = Router();
userRouter.get('/',getUserList);
userRouter.post("/login",validate(loginValidation) ,loginUser);
userRouter.post("/register",validate(registerValidation) , registerUser);
userRouter.get("/auth",verifyToken,authorizeUser);

export default userRouter;