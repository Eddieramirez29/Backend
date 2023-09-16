import express from "express"
import {} from "dotenv/config"
import { jsonParser } from "./src/middleware/bodyParser"
import registerRouter from "./src/routers/registerRouter"
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
)


app.listen(port, () => {
    console.log(`Aplicacion escuchando por el puerto ${port}`)
})

