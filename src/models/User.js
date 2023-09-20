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

}, { timestamps: true } )

const User = model("users", userSchema)

export default User;