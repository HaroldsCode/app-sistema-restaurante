import { useState } from "react"
import { crearRestaurante } from '../Api/crearRestaurante';
import { editarRestaurante } from "../Api/editarRestaurante";
import { editarRestauranteSinImagen } from "../Api/editarRestauranteSinImagen";

export const useForm = (initialState = {}) => {

    const [formValues, setFormValues] = useState(initialState);
    const [exito, setExito] = useState({
        estado: false,
        msg: null
    })

    const cambioInput = ({target}) => {
        setFormValues({...formValues, [target.name]: target.value})
    }
    const cambioFile = ({target}) => {
        setFormValues({...formValues, [target.name]: target.files[0]})
    }

    const envioFormulario = (event) => {
        event.preventDefault();
        const res = async() => {
            const res = await crearRestaurante(formValues)
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


    const editarFormulario = (event) => {
        event.preventDefault();
        if((typeof formValues.URL) === 'object'){
            const res = async() => {
                const res = await editarRestaurante(event.target.dataset.nit, formValues)
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
        }else{
            const res = async() => {
                const res = await editarRestauranteSinImagen(event.target.dataset.nit, formValues)
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
    }

    return {
        exito,
        formValues,
        cambioInput,
        cambioFile,
        envioFormulario,
        editarFormulario
    }
}
