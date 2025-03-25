import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Inicio from './componentes/Tabs/Inicio.jsx';
import Tours from './componentes/Tabs/Tours.jsx';
import Discografia from './componentes/Tabs/Discografia.jsx';
import Fotos from './componentes/Tabs/Fotos.jsx';
//import Tienda from './componentes/Tabs/Tienda.jsx';
import Tienda2 from './componentes/Tabs/Tienda2.jsx';
import Navegacion from './componentes/Navegacion.jsx';
import Error from './componentes/Error.jsx';

//como buena practica, el nombre de la componente deberia coincidir con el del archivo, en este caso App
function App() {  
  return ( //voy a tener un solo nodo padre ya que se retorna una componente, es decir un solo div, despues en ese nodo padre pueden haber mas ndos (divs) o muchos componentes
    <BrowserRouter>
      <div className="app-container">     
        <Navegacion />
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/discografia" element={<Discografia/>} />
          <Route path="/tours" element={<Tours/>} />
          <Route path="/fotos" element={<Fotos/>} />
         {/*<Route path="/tienda" element={<Tienda/>} /> */} 
          <Route path="/tienda2" element={<Tienda2 />} />
          <Route path="/*" element={<Error/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; //hay que exportar el nombre de la funcion para despues poder importarla en el index y renderizarla