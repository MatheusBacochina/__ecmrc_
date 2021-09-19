import { createContext } from "react";
import {useState} from 'react'

export const Mycontext = createContext({});



export const ProvContext = ({children}) =>{

    const [data, setdata] = useState([{}])
    const [pedido, setpedido] = useState([])

    return(
        <Mycontext.Provider value={{data, setdata, pedido, setpedido}} >

            {children}

        </Mycontext.Provider>
    );

}