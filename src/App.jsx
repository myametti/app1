
import './App.css';
import Inicio from './componentes/Inicio';
import Discografia from './componentes/Discografia';
import Tours from './componentes/Tours';
import Fotos from './componentes/Fotos';


//como buena practica, el nombre de la componente deberia coincidir con el del archivo, en este caso App
function App() {
  return (//voy a tener un solo nodo padre ya que se retorna una componente, es decir un solo div, despues en ese nodo padre pueden haber mas ndos (divs)
    <div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="Inicio" data-bs-toggle="tab" data-bs-target="#inicio-tab-pane" type="button" role="tab" aria-controls="inicio-tab-pane" aria-selected="true">Inicio</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="Discografia" data-bs-toggle="tab" data-bs-target="#discografia-tab-pane" type="button" role="tab" aria-controls="discografia-tab-pane" aria-selected="false">Discografía</button>
          </li>
          <li className="nav-item" role="presentation">
            <button class="nav-link" id="Tours" data-bs-toggle="tab" data-bs-target="#tours-tab-pane" type="button" role="tab" aria-controls="tours-tab-pane" aria-selected="false">Tours</button>
          </li>
          <li className="nav-item" role="presentation">
            <button class="nav-link" id="Fotos" data-bs-toggle="tab" data-bs-target="#fotos-tab-pane" type="button" role="tab" aria-controls="fotos-tab-pane" aria-selected="false">Fotos</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="inicio-tab-pane" role="tabpanel" aria-labelledby="inicio-tab" tabIndex="0">
            <Inicio/>
          </div>
          <div className="tab-pane fade" id="discografia-tab-pane" role="tabpanel" aria-labelledby="discografia-tab" tabIndex="0">
            <Discografia/>
          </div>
          <div className="tab-pane fade" id="tours-tab-pane" role="tabpanel" aria-labelledby="tours-tab" tabIndex="0">
            <Tours/>
          </div>
          <div className="tab-pane fade" id="fotos-tab-pane" role="tabpanel" aria-labelledby="fotos-tab" tabIndex="0">
            <Fotos/>
          </div>
        </div>
      </div> 
  );
}

export default App; //hay que exportar el nombre de la funcion para despues poder importarla en el index y renderizarla
