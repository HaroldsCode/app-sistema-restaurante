import axios from "axios";

export const RestaurantePorNombre = async (letra) => {
    let respuesta = {
        status: 0,
        data: [],
        message: ''
    }
    const res = await axios.get(`http://localhost:4000/v1/api/restaurantes/nombre/${letra}`)
    respuesta.status = res.data.status;
    respuesta.data = res.data.data;
    respuesta.message = res.data.message;
    return respuesta
}