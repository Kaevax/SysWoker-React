import './css/App.css'
import './css/Inicio.css'
import './css/navbar.css'
import { Navbar } from './components/navbar';
import { Maincontainer } from './components/Inicio';

var MiniLogo = require('./img/logo.png');

function App() {
  return (
    <div className='App'>
      <Navbar
      MiniLogo = {MiniLogo}/>
      <Maincontainer/>
    </div>
  ) ;
}

export default App;
