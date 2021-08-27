import { useEffect, useState } from "react";
import { listaRestaurantes } from "../Api/ListaRestaurantes";

export const Restaurantes = () => {

    const [restaurantes, setRestaurantes] = useState({
        status: 0,
        data: [],
        message: null,
        cargado: false
    })
    
    useEffect(() => {
        async function getItems(){
            await listaRestaurantes()
                .then(res => {
                    if(res.status === 200){
                        setRestaurantes({
                            ...res,
                            cargado: true
                        })
                    }
                })
                
        }
        getItems();
    }, [setRestaurantes])
    
    return restaurantes;
}
