import { Router } from "express";
import { getUser } from "../controllers/getUserController";


const getRouter = Router();

getRouter.get("/users", getUser); 

export default getRouter;


