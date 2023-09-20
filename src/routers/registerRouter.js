import { Router } from "express";
import { register } from "../controllers/registerController";

//Router de registro de usuario

const registerRouter = Router();

registerRouter.post("/signup", register);



export default registerRouter;
