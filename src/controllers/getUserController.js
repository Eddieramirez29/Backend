 import User from "../models/User"

export const getUser = async (_, response) => {
    const users = await User.find({});//Extra la información de todos los usuarios

    response.send(users);
}

export const getUserById = async (request, response) => {
    const { id } = request.params
    const user = await Task.findById(id).populate("user")
    if (!user) 
    {
        response.status(404).send("No existe el registro en la base de datos")
    }
    response.status(200).send(user);
}