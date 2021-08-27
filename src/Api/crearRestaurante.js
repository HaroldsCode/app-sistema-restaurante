import axios from "axios";

export const crearRestaurante = async (restaurant) => {

    let respuesta = {
        status: 0,
        data: [],
        message: ''
    }

    const f = new FormData();
    f.append('Nit', parseInt(restaurant.Nit))
    f.append('imagen', restaurant.URL, restaurant.URL.name)

    const res = await axios.post('http://localhost:4000/v1/api/images/', f);
    if(res.data.status === 201){
        const res2 = await axios.post('http://localhost:4000/v1/api/restaurantes/', {
            Nit: parseInt(restaurant.Nit),
            Nombre: restaurant.Nombre,
            Descripcion: restaurant.Descripcion,
            Direccion: restaurant.Direccion,
            Ciudad: restaurant.Ciudad,
            URL: res.data.data.url,
        })
        respuesta.status = res2.data.status;
        respuesta.data = res2.data.data;
        respuesta.message = res2.data.message;
        
    }else{
        respuesta.status = res.data.status;
        respuesta.data = res.data.data;
        respuesta.message = res.data.message;
    }
    
    return respuesta
}