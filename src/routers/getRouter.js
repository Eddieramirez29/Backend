import { Router } from "express";
import { /*getUser, */ getUserByEmail } from "../controllers/getUserController";


const getRouter = Router();

// getRouter.get("/users", getUser);  para extraer a todos los usuarios.

//Para extraer un usuario en especifico por medio de su email y ver si está registrado

getRouter.get("/users/:email", getUserByEmail); 

export default getRouter;


