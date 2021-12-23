import { useEffect, useState } from "react";
import { listaReservas } from "../Api/listaReservas";

export const Reservas = () => {

    const [reservas, setReservas] = useState({
        status: 0,
        data: [],
        message: null,
        cargado: false
    })
    
    useEffect(() => {
        async function getItems(){
            await listaReservas()
                .then(res => {
                    if(res.status === 200){
                        setReservas({
                            ...res,
                            cargado: true
                        })
                    }
                })
                
        }
        getItems();
    }, [setReservas])
    
    return reservas;
}
