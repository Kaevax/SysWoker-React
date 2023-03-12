import './css/App.css'
import './css/Inicio.css'
import './css/navbar.css'
import './css/container.css'
import { Navbar } from './components/navbar';
import { Maincontainer } from './components/Inicio';
import { ContenedorSeccion } from './components/container';
let Img1 = require('./img/logo.png')
let Img2 = require('./img/icono.png')

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
      h1 = "Habilidades"
      parrafo = "Aprendiz de todo y maestro de nada"
      />

      <ContenedorSeccion
      h1 = "Habilidades secundarias"
      img = {Img1}
      img2 = {Img2}
      />
            <ContenedorSeccion id="hola"
      h1 = "Habilidades secundarias"
      img = {Img1}
      img2 = {Img2}
      />

    </div>

  ) ;
}

export default App;
