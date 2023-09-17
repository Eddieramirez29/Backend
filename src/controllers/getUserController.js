import User from "../models/User";

export const getUser = async (_, response) => {
  try {
    const users = await User.find({}); // Extrae la información de todos los usuarios

    if (users.length === 0) {
      // Verifica si no se encontraron usuarios
      response.status(404).send("No existe el registro en la base de datos");
    } else {
      // Envía la lista de usuarios si se encontraron usuarios
      response.status(200).send(users);
    }
  } catch (error) {
    // Maneja errores si ocurren al consultar la base de datos
    console.error("Error al obtener usuarios:", error);
    response.status(500).send("Error interno del servidor");
  }
};


export const getUserById = async (request, response) => {
    const { id } = request.params; //La variable id tiene el mismo nombre que viene en el enrutador
    const user = await User.findById(id);//Permite extrar la info de un usuario por medio del id asignado en Mongo DB.
    if (!user) 
    {
        response.status(404).send("No existe el registro en la base de datos")
    }
    response.status(200).send(user);
}