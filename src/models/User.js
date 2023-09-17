import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
    
    name: String,
    lastName: String,
    email:
     {
        type: String,
        required: true,
        unique: true
    },
     password: 
    {
        type: String,
       required: true
    },
    // tasks: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "tasks" // nombre de coleccion a lo que se hace referencia
    // }] 
}, { timestamps: true } )

const User = model("users", userSchema)

export default User;