import axios from "axios";

export const crearReserva = async (reserva) => {

    let respuesta = {
        status: 0,
        data: [],
        message: ''
    }

    const res = await axios.post('http://localhost:4000/v1/api/reservas/', reserva);
    
    respuesta.status = res.data.status;
    respuesta.data = res.data.data;
    respuesta.message = res.data.message;
    
    
    return respuesta
}