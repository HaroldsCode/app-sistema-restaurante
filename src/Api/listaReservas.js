import axios from "axios";

export const listaReservas = async () => {
    let respuesta = {
        status: 0,
        data: [],
        message: ''
    }
    const res = await axios.get('http://localhost:4000/v1/api/reservas/')
    respuesta.status = res.data.status;
    respuesta.data = res.data.data;
    respuesta.message = res.data.message;
    return respuesta
}