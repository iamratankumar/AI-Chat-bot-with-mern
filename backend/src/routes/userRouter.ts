import { Router } from "express";
import {getUserList, loginUser, registerUser} from "../controllers/userController.js";
import {loginValidation, registerValidation, validate} from '../utils/userValidation.js'

const userRouter = Router();
userRouter.get('/',getUserList);
userRouter.post("/login",validate(loginValidation) ,loginUser);
userRouter.post("/register",validate(registerValidation) , registerUser);

export default userRouter;