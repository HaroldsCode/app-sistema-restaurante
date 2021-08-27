import { Restaurantes } from "../Helper/Restaurantes";
import { EliminarRestaurante } from '../Api/EliminarRestaurante';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Filtro } from "./Filtro";

export const TarjetaRestaurantes = () => {

    let {data, message, cargado} = Restaurantes();

    const eliminar = async (e)=>{
        e.preventDefault();
        await EliminarRestaurante(e.target.dataset.nit);
        await window.location.reload()
    }

    const [filtro, setFiltro] = useState('')

    const soporteFiltro = (e)=> {
        e.preventDefault()
        setFiltro(e.target.elements['consulta'].value)
    }
    const inicio = (e) => {
        e.target.parentElement.reset()
        setFiltro('')
    }
    
    return (
        <div className="row">
            <div className="d-flex felx-row gap-5 pt-1 pb-3">
                <div>
                    <p className="fw-light lh-sm text-muted mb-2">Si escribes una letra se filtra por nombre de restaurantes, de lo contrario se tomará como ciudad</p>
                    <form className="d-flex" onSubmit={soporteFiltro}>
                        <input className="form-control me-2" type="search" name="consulta" placeholder="Escribre tu filtro" autoComplete="off"/>
                        <button className="btn btn-outline-info" type="submit">🔎</button>
                        <button type="button" className="btn btn-outline-dark ms-2" onClick={inicio}>🧹</button>
                    </form>
                </div>
            </div>
            {
                !!filtro && <Filtro filtro={filtro}/>
            }
            {!filtro && (<div className="card-group">
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
            </div>)}
        </div>
    )
}