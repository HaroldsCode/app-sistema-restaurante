import { Redirect, useHistory, useLocation, useParams } from "react-router-dom";
import { useForm } from "../Hook/useForm";
import img from '../img/restaurante.png';

export const EditarRestaurante = () => {

    const history = useHistory()
    const {state} = useLocation()
    const {nit} = useParams()
    
    const { exito, formValues, cambioInput, cambioFile, editarFormulario } = useForm({
        Nit: state.datos.Nit,
        Nombre: state.datos.Nombre,
        Descripcion: state.datos.Descripcion,
        Direccion: state.datos.Direccion,
        Ciudad: state.datos.Ciudad,
        URL: state.datos.URL
    });
    const {estado, msg} = exito;
    return (
        <>
            <h1 className="text-center text-primary">Editar Restaurante</h1>
            <div className="m-5 d-flex flex-row aling-center" >
                <div className="col-6 d-flex justify-content-center">
                    <img src={img} alt="Personas en una mesa" className="img"/>
                </div>
                <form className="row g-3 col-6" onSubmit={editarFormulario} data-nit={nit}>

                    <div className="col-sm-6">
                        <label
                            className="form-label text-primary"
                        >NIT</label>
                        <input 
                            type="number"
                            className="form-control"
                            name="Nit"
                            autoComplete="off"
                            placeholder="12598754"
                            onChange={cambioInput}
                            value={formValues.Nit}
                            required
                        />
                    </div>

                    <div className="col-sm-6">
                        <label
                            className="form-label text-primary"
                        >Nombre del restaurante</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="Nombre"
                            autoComplete="off"
                            placeholder="Pepe's"
                            onChange={cambioInput}
                            value={formValues.Nombre}
                            required
                        />
                    </div>

                    <div className="col-sm-12">
                        <label
                            className="form-label text-primary"
                        >Describe tu restaurante</label>
                        <textarea 
                            name="Descripcion"
                            className="form-control"
                            onChange={cambioInput}
                            value={formValues.Descripcion}
                            placeholder="Es un restaurante para toda la familia con precios accesibles"
                            required
                        >
                        
                        </textarea>
                    </div>

                    <div className="col-sm-6">
                        <label
                            className="form-label text-primary"
                        >Dirección</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="Direccion"
                            autoComplete="off"
                            placeholder="Carrera 12"
                            onChange={cambioInput}
                            value={formValues.Direccion}
                            required
                        />
                    </div>

                    <div className="col-sm-6">
                        <label
                            className="form-label text-primary"
                        >Ciudad</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="Ciudad"
                            autoComplete="off"
                            placeholder="Bogotá"
                            onChange={cambioInput}
                            value={formValues.Ciudad}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-primary msj">Sube la imagen representativa de tu negocio.</label>
                        <input className="form-control" type="file" name="URL" onChange={cambioFile} />
                    </div>
                    
                    <div className="col-12 d-flex justify-content-between">
                        <button type="button" className="btn btn-danger" onClick={()=> history.goBack()}>Cancelar</button>
                        <button type="submit" className="btn btn-outline-primary">Editar restaurante</button>
                    </div>
                    {
                        (!!msg && (
                            estado ? (
                                <Redirect to="/restaurante" />
                            ) : (
                                <div class="alert alert-danger" role="alert">
                                    <span>{msg}</span>
                                </div>
                            )
                        ))
                    }
                </form>
            </div>
        </>
    )
}
