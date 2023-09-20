import User from "../models/User";

//Obtiene el email y verifica si ya está registrado
export const getUserByEmail = async (request, response) => {
    const { email } = request.params;

    try
    {
     // Buscar un usuario con el correo electrónico proporcionado
     const user = await User.findOne({ email });
    if (!user) 
    {
        //El return evita que la app se detenga
        return   response.status(404).send("No existe el registro en la base de datos");         
    }
    
    response.status(200).send(user);
    }

    catch(error)
    {
        response.status(500).send("Error interno del servidor");
    }
}