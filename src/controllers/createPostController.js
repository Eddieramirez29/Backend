import Post from "../models/Post";

//Controlador usado para el registro de un usuario.
export const post = async (request, response) => {

    const { title, content, user} = request.body//Obtener los datos del formulario


    const newPost = new Post({
        title,
        content,
        user
    })

    await newPost.save();
    response.status(201).send(newPost)
}
