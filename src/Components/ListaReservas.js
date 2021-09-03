import React, { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { crearReserva } from '../Api/crearReserva';

export const ListaReservas = () => {
    const history = useHistory();
    const {state} = useLocation();

    const [datos] = useState(state.datos);

    const [form, setForm] = useState({
        Fecha: '',
        numeroMesas: 0,
        Restaurante: datos
    })

    const [exito, setExito] = useState({
        estado: false,
        msg: null
    })
    const cambio = ({target}) =>{
        const auxiliar = target.value.split('-')
        const fecha = new Date()
        fecha.setDate(parseInt(auxiliar[2]), parseInt(auxiliar[1]), parseInt(auxiliar[0]))
        fecha.setHours(0,0,0,0);
        setForm({...form, [target.name]: fecha.toLocaleDateString()})
    }

    const cambioMesas = ({target}) =>{
        const auxiliar = target.value.split('-')
        const fecha = new Date()
        fecha.setDate(parseInt(auxiliar[2]), parseInt(auxiliar[1]), parseInt(auxiliar[0]))
        fecha.setHours(0,0,0,0);
        setForm({...form, [target.name]: target.value})
        console.log(form)
    }

    const envio = (e) => {
        e.preventDefault();
        const res = async() => {
            const res = await crearReserva(form)
            if(res.status === 201){
                setExito({
                    estado: true,
                    msg: res.message
                })
            }else{
                setExito({
                    estado: false,
                    msg: res.message
                })
            }
        }
        res()
    }

    return (
        <>
            <div className="col-6 m-auto">
                <button type="button" className="btn text-primary mb-3" onClick={()=> history.goBack()}>{'< Ir atras'}</button>
                <div className="card w-100 md-3" key={datos.Nit}>
                    <div className="card-body">
                        <h1 className="card-title">{datos.Nombre}</h1>
                        <p className="card-text">{datos.Descripcion}</p>
                        <address>
                            <span className="card-text">{datos.Direccion} - {datos.Ciudad}</span>
                        </address>
                        <form onSubmit={envio}>
                            <div className="mb-3">
                                <label className="form-label">Fecha Reserva</label>
                                <input type="date" className="form-control" name="Fecha" onChange={cambio}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Fecha Reserva</label>
                                <input type="date" className="form-control" name="numeroMesas" onChange={cambioMesas}/>
                            </div>
                            <div className="mb-3 d-grid">
                                <button type="submit" className="btn btn-outline-primary">Realizar reserva</button>
                            </div>
                        </form>
                    </div>
                </div>
                {
                    (!!exito.msg && (
                        exito.estado ? (
                            <Redirect to="/restaurante" />
                        ) : (
                            <div className="alert alert-danger mt-3" role="alert">
                                <span>{exito.msg}</span>
                            </div>
                        )
                    ))
                }
            </div>
        </>
    )
}

