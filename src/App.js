import { ContentImg } from "./components/ContentImg";
import { Header, NavBar, Links } from "./components/Navbar";
import "./styles/global.scss";
import { Cardapio } from "./components/Cardapio";
import { Cardapio2 } from "./components/Cardapio2";
import { Cards } from "./pages/Cards";
import { Switch, Route, HashRouter, Link, useHistory, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

const [loc, setloc] = useState('home');


  return (
   
      <div className="App">
        <Header>
          <NavBar>
            <div className="Logo"> </div>
          </NavBar>
        </Header>
        <ContentImg />
        <BrowserRouter>
        <Links>
          <Link to="/" className={`Link ${loc === 'home' ? 'active' : ''}`} onClick={() => setloc('home')} activeClassName="haha">
            Ola
          </Link>
          <Link to="/cardapio" className={`Link ${loc === 'home2' ? 'active' : ''}`}  onClick={() => setloc('home2')}> 
            Ola
          </Link>
        </Links>
        
        <Switch>
          <Route exact path="/" component={Cardapio} />
          <Route exact path="/cardapio" component={Cardapio2} />
          <Route />
        </Switch>
        </BrowserRouter>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14615.582199920002!2d-46.6522407!3d-23.679693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6937c90d5ff7b017!2sFrango%20Bom%20%C3%A9%20Frito!5e0!3m2!1spt-BR!2sbr!4v1630360047929!5m2!1spt-BR!2sbr"  className='maps' allowfullscreen="" loading="lazy"></iframe>
        </div>
      
      </div>
    
  );
}

export default App;
