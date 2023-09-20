// import bcrypt from "bcrypt"

import User from "../models/User"

//Controlador usado para el registro de un usuario.
export const register = async (request, response) => {

    const { name, lastName, email, password } = request.body//Obtener los datos del formulario

    // const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
        name,
        lastName,
        email,
        password//: hashedPassword
    })

    await newUser.save();
    response.status(201).send(newUser)
}

