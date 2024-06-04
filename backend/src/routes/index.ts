import { Router } from "express";
import userRouter from "./userRouter.js";
import chatRouter from "./chatsRouter.js";

const appRouter = Router();

appRouter.use("/user",userRouter);
appRouter.use("/chats",chatRouter);

export default appRouter;