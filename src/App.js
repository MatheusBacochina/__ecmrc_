import { ContentImg } from "./components/ContentImg";
import { Header, NavBar } from "./components/Navbar";
import './styles/global.scss'
import { Cardapio } from './components/Cardapio'





function App() {
    return ( <
        div className = "App" >

        <
        Header >
        <
        NavBar >
        <
        div className = "Logo" > < /div> <
        /NavBar> <
        /Header>

        <
        ContentImg / >
        <
        Cardapio > < /Cardapio>

        <
        /div>
    );
}

export default App;