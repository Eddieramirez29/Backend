import { Router } from "express";
import { getUser, getUserById } from "../controllers/getUserController";


const getRouter = Router();

getRouter.get("/users", getUser); 

//Para extraer un usuario en especifico por medio de su id.

getRouter.get("/users/:id", getUserById); 

export default getRouter;


