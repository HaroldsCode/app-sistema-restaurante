import { Redirect } from "react-router-dom";
import { useForm } from "../Hook/useForm";
import img from '../img/restaurante.png';

export const FormularioRestaurante = () => {

    const { exito, formValues, cambioInput, cambioFile, envioFormulario } = useForm({
        Nit: '',
        Nombre: '',
        Descripcion: '',
        Direccion: '',
        Ciudad: '',
        URL: ''
    });
    
    const {estado, msg} = exito;
    return (
        <div className="m-5 d-flex flex-row aling-center">
            <div className="col-6 d-flex justify-content-center">
                <img src={img} alt="Personas en una mesa" className="img"/>
            </div>
            <form className="row g-3 col-6" onSubmit={envioFormulario}>

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
                    <input className="form-control" type="file" name="URL" onChange={cambioFile} required/>
                </div>
                
                <div className="col-12 d-grid">
                    <button type="submit" className="btn btn-outline-primary">Registrar restaurante</button>
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
    )
}
