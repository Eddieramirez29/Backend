import mongoose from "mongoose"


const uri = `mongodb+srv://tkd13000:IiOlSmvwQWlwfn5K@cluster000.8uy9xhc.mongodb.net/BackEnd?retryWrites=true&w=majority`

export const DBConn = async () => {
    try {
        await mongoose.set("strictQuery", false).connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Conexion con MongoDB exitosa!")
    } catch (error) {
        console.log("Error al conectarse con MongoDB", error)
    }
}
