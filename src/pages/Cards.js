import "../styles/card.scss";
import styled from "styled-components";
import {useContext, useEffect} from 'react'
import {Mycontext} from '../context/context'
import {useState} from 'react'



const Card = styled.div`
  width: 250px;
  height: 250px;
  margin: 10px 30px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  background: url(${(props) => props.Image});
  background-size: cover;
  background-position: center;
`;

export const Cards = (props) => {
const {data, setdata, pedido, setpedido} = useContext(Mycontext)
    
const [product, setproduct] = useState({})
const [qnt, setqnt] = useState(0)
const [set, setval] = useState(false)
const [bnt, setbnt] = useState(0)
useEffect(() =>{

  


}, [pedido])


const ader= (sub) =>{
  setqnt(qnt + 1);
  handleAddValue()
}

const handleAddValue = () =>{

  setproduct(data.map(val => val.name === props.name))
  

  var qntt = qnt;
  setval(product)
  if(!set)
  {let datas = {name: props.name, quantidade: qnt};
  setdata([...data, datas]);}

 
  setprod(qntt)
 


}


const rell= () =>{
  setqnt(qnt - 1);
  handleRelValue()
}

const handleRelValue = () =>{
  
  if(qnt >0){
  setqnt(qnt -1)
  }
  if(qnt == 0) {
    setval(false)
    setdata(va => va.filter(el => el.name !== props.name))
  }
 
 


var qntRel = qnt;
setprod(qntRel)
  
}


function setprod (vall) {
  setdata(prev => prev.map(val => val.name === props.name ? {...val, quantidade: vall} : val))}
  console.log(data)

  return (
    <Card Image={props.Images}>
      <div className="separator">
      
        <div className="separator1">
        <h3>{props.preco}</h3>
        </div>
        <div className="separator2" >
        
          <h5>{props.desc},{qnt}</h5> 
          
        </div>
      
        <button onClick={() =>ader()}>+</button>
        <button onClick={()=>handleRelValue()}>-</button>
      </div>
      
    </Card>
  );
};
