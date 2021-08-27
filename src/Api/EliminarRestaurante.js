import axios from "axios";

export const  EliminarRestaurante = async (nit) => {
    let respuesta = {
        status: 0,
        data: [],
        message: ''
    }
    await axios.delete(`http://localhost:4000/v1/api/restaurantes/${nit}`)
        .then(({data}) => {
            respuesta.status = data.status;
            respuesta.data = data.data;
            respuesta.message = data.message;
        })
    return respuesta
}