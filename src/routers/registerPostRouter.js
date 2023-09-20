import { Router } from "express";
import { post } from "../controllers/createPostController";

//Router de registro de usuario

const registerPostRouter = Router();

registerPostRouter.post("/posts", post);



export default registerPostRouter;
