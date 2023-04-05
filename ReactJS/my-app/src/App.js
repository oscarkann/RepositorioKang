import logo from './logo.svg';
import './App.css';
import PrimerComponente from './misComponentes/PrimerComponente';
import {SegundoComponente} from './misComponentes/SegundoComponente';
import TercerComponente from './misComponentes/TercerComponente';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from './pages/Contacto';


function App() {
  const datos={
    lugar: "Jalisco",
    gusto: "Nieve de Nuez"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<div>Hola Ch23</div>} />
          <Route path='/msj' element={<div>Generation</div>} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
        </BrowserRouter>
        <p>
          Sayonara gurls
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Cohorte 23</h1>
        <div className= "componentes">
          <hr></hr>
          <SegundoComponente nombre="Oscar " apellido="Paz" 
          info={datos} />
          <hr></hr>
        <PrimerComponente />
        <hr></hr>
        <TercerComponente/>
        <hr />
        <Contacto />
        </div>
      </header>
    </div>
  );
}

export default App;
