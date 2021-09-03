import React from 'react'
import { Reservas } from '../Helper/Reservas';

export const TablaReservas = () => {

    let {data, message, cargado} = Reservas();

    return (
        <div className="row">
            <div className="card-group">
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
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-3 p-1" key={item.id}>
                                <div className="card card-reserva">
                                    <div className="card-body old">
                                        <p className="card-text m-0">Restaurante: <span className="text-primary ">{item.Restaurante.Nombre}</span></p>
                                        <p className="card-text m-0">Mesas: <span className="text-primary ">{item.numeroMesas}</span></p>
                                        <span className="card-text">Fecha - {item.Fecha}</span>
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
            </div>
        </div>
    )
}
