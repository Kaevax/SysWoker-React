import './css/App.css'
import './css/Inicio.css'
import './css/navbar.css'
import { Navbar } from './components/navbar';
import { Maincontainer } from './components/Inicio';
import { ContenedorSeccion } from './components/container';
import { Formulario } from './components/container';

var MiniLogo = require('./img/logo.png');

function App() {
  return (
    <div className='App'>
      <Navbar
      MiniLogo = {MiniLogo}/>
      <Maincontainer
      
      titulo = "Proyectos"
      h4 = "Info"
      />

      <ContenedorSeccion
      textoH1 = "holas"
      />

    </div>

  ) ;
}

export default App;
