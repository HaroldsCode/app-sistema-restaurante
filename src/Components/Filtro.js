import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EliminarRestaurante } from '../Api/EliminarRestaurante';
import { RestaurantePorCiudad } from '../Api/RestaurantePorCiudad';
import { RestaurantePorNombre } from '../Api/RestaurantePorNombre';

export const Filtro = ({filtro}) => {

    const [resultado, setResultado] = useState({data: [], message: '', cargado: false})
    const {data, message, cargado} = resultado;

    useEffect(() => {
        const res = async() => {
            if(filtro.length === 1){
                const res = await RestaurantePorNombre(filtro)
                if(res.status === 201){
                    setResultado({
                        data: res.data,
                        message: res.message,
                        cargado: true
                    })
                }else{
                    setResultado({
                        data: res.data,
                        message: res.message,
                        cargado: true
                    })
                }
            }else if(filtro.length > 1){
                const res = await RestaurantePorCiudad(filtro)
                if(res.status === 201){
                    setResultado({
                        data: res.data,
                        message: res.message,
                        cargado: true
                    })
                }else{
                    setResultado({
                        data: res.data,
                        message: res.message,
                        cargado: true
                    })
                }
            }
        }
        res()
    }, [filtro])

    const eliminar = async (e)=>{
        e.preventDefault();
        await EliminarRestaurante(e.target.dataset.nit);
        await window.location.reload()
    }

    return (
        <>
            {!message ? (
                !cargado
                ?
                (
                    <div className="alert alert-info m-2 w-100 text-center" role="alert">
                        <span>Cargando restaurantes</span>
                    </div> 
                )
                :
                (
                    data.map(item => (
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-1" key={item.Nit}>
                            <div className="card">
                                <img src={item.URL} className="card-img-top" alt={item.Nombre}/>
                                <div className="card-body">
                                    <h3 className="card-title">{item.Nombre}</h3>
                                    <p className="card-text">{item.Descripcion}</p>
                                    <Link to={{
                                            pathname: `/restaurante/reserva/${item.Nit}`,
                                            state: { datos: item }
                                        }}>
                                        <button type="button" className="btn btn-outline-primary">Reservar</button>
                                    </Link>
                                    <Link to={{
                                            pathname: `/restaurante/editar/${item.Nit}`,
                                            state: { datos: item }
                                        }}>
                                        <button type="button" className="btn btn-outline-primary ms-2">Editar</button>
                                    </Link>
                                    <button type="button" onClick={eliminar} data-nit={item.Nit} className="btn btn-outline-primary ms-2">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))
                )
            ) 
            :(
                <div className="alert alert-danger m-2 w-100 text-center" role="alert">
                    <span>{message}</span>
                </div> 
            )
            }
        </>
    )
}
