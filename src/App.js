import { ContentImg } from "./components/ContentImg";
import { Header, NavBar, Links } from "./components/Navbar";
import "./styles/global.scss";
import { Cardapio } from "./components/Cardapio";
import {Buttom} from './components/buttom'
import { Cardapio2 } from "./components/Cardapio2";
import { Switch, Route, HashRouter, Link, useHistory, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import {ProvContext} from './context/context'
import {Button} from './components/buttom'
function App() {


const [loc, setloc] = useState(window.location.pathname);



  return (
    <ProvContext>
      <div className="App">
        <Header>
          <NavBar>
            <div className="Logo"> </div>
          </NavBar>
        </Header>
        <ContentImg />
        <BrowserRouter>
        <Links>
          <Link to="/" className={`Link ${loc === 'home' || loc  === '/' ? 'active' : ''}`} onClick={() => setloc('home')} activeClassName="haha">
            Porções
          </Link>
          <Link to="/cardapio" className={`Link ${loc  === 'home2' || loc  === '/cardapio' ? 'active' : ''}`}  onClick={() => setloc('home2')}> 
           Bebidas
          </Link>
        </Links>
        
        <Switch>
          <Route exact path="/" component={Cardapio} />
          <Route exact path="/cardapio" component={Cardapio2} />
          <Route />
        </Switch>
        </BrowserRouter>
        <Button />
       
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14615.582199920002!2d-46.6522407!3d-23.679693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6937c90d5ff7b017!2sFrango%20Bom%20%C3%A9%20Frito!5e0!3m2!1spt-BR!2sbr!4v1630360047929!5m2!1spt-BR!2sbr"  className='maps' allowfullscreen="" loading="lazy"></iframe>
        </div>
      
      </div>
     </ProvContext>
    
  );
}

export default App;
