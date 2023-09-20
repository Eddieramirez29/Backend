import mongoose from "mongoose";

const { Schema, model } = mongoose;

const postSchema = new Schema({
    
    title: String,
    content: String,
    user: String

}, { timestamps: true } )

const Post = model("posts", postSchema);

export default Post;