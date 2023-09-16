import express from "express"
import {} from "dotenv/config"
import { jsonParser } from "./src/middleware/bodyParser"
import registerRouter from "./src/routers/registerRouter"
import { DBConn } from "./src/config/database"


const app = express()
const port = 3001

DBConn()

// Middleware
app.use(jsonParser)

// Routers
app.use(
    registerRouter,   
)


app.listen(port, () => {
    console.log(`Aplicacion escuchando por el puerto ${port}`)
})

