import './App.css';
import Barra from './componentes/Tabs/Barra.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//como buena practica, el nombre de la componente deberia coincidir con el del archivo, en este caso App
function App() {  
  return ( //voy a tener un solo nodo padre ya que se retorna una componente, es decir un solo div, despues en ese nodo padre pueden haber mas ndos (divs) o muchos componentes
    <div className="app-container">     
          <Barra />
    </div> 
  );
}

export default App; //hay que exportar el nombre de la funcion para despues poder importarla en el index y renderizarla