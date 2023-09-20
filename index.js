import express from "express"
import {} from "dotenv/config"
import { jsonParser } from "./src/middleware/bodyParser"
import registerRouter from "./src/routers/registerRouter"
import registerPostRouter from "./src/routers/registerPostRouter"
import getRouter from "./src/routers/getRouter"
import { DBConn } from "./src/config/database"
const cors = require('cors');


const app = express()
const port = 27027

DBConn()

// Middleware
app.use(jsonParser)

// Habilita CORS para todos los orígenes (en desarrollo)
app.use(cors());

// Routers
app.use(
    registerRouter,  
    getRouter,
    registerPostRouter
)


app.listen(port, () => {
    console.log(`Aplicacion escuchando por el puerto ${port}`)
})

