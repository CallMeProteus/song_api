import './App.css';
import Sidenav from './components/sidenav';
import logo from './assets/music_icon.png'
import Node from './components/node';

function App() {
  return (
    <div className="App">
    <Sidenav/>
    <img className='img-logo' src={logo} alt="Logo" />
    <img className='img-logo' src={logo} alt="Logo" />
    <img className='img-logo' src={logo} alt="Logo" />
    <img className='img-logo' src={logo} alt="Logo" />
    <Node/>

    </div>
  );
}

export default App;
