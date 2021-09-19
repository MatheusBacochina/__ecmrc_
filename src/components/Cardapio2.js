import '../styles/cardapio.scss'
import {Cards} from '../pages/Cards'
import cocaCola from '../images/bebidas/cocacola.png'
export function Cardapio2() {
   
    return ( 
    <>
        <main>

        <Cards name="Coca-Cola 2l" desc='Coca Cola 2l' preco="$ 2,50" Images={cocaCola}/>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        


        </main> 
        </>
    );
}