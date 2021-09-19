import {Mycontext} from '../context/context'
import {useContext} from 'react'
export const Button = () =>{
    const {data, setdata, pedido, setpedido} = useContext(Mycontext)
 const FinalizarPedido = () =>{

     
        setpedido(JSON.stringify(data))
        console.log(pedido)
    
 }
    return (
        <button onClick={FinalizarPedido}>Ola</button>
    )
} 