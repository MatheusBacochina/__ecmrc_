import { ContentImg } from "./components/ContentImg";
import { Header, NavBar } from "./components/Navbar";
import './styles/global.scss'





function App() {
  return (
    <div className="App">
      
     <Header>
       <NavBar>
       </NavBar>
     </Header>

     <ContentImg/>

    </div>
  );
}

export default App;