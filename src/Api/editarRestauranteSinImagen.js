import axios from "axios";

export const editarRestauranteSinImagen = async (nit, restaurant) => {

    let respuesta = {
        status: 0,
        data: [],
        message: ''
    }

    const res2 = await axios.put(`http://localhost:4000/v1/api/restaurantes/${nit}`, {
            Nit: parseInt(restaurant.Nit),
            Nombre: restaurant.Nombre,
            Descripcion: restaurant.Descripcion,
            Direccion: restaurant.Direccion,
            Ciudad: restaurant.Ciudad,
            URL: restaurant.URL,
        })
    respuesta.status = res2.data.status;
    respuesta.data = res2.data.data;
    respuesta.message = res2.data.message;
    
    return respuesta
}