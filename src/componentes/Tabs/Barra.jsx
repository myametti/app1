
import Inicio from './Inicio';
import Discografia from './Discografia';
import Tours from './Tours';
import Fotos from './Fotos';
import Tienda from './Tienda';
import PagTS from './PagTS';
import  './Vistas/Barra.css';


const Barra =()=>{
  
return(
<div id="Barra navegacion">
    
    <ul className="nav nav-tabs" id="myTab" role="tablist">  
    <li ><PagTS titulo="Ir a pagina oficial de TS"/> </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="Inicio" data-bs-toggle="tab" data-bs-target="#inicio-tab-pane" type="button" role="tab" aria-controls="inicio-tab-pane" aria-selected="true">Inicio</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="Discografia" data-bs-toggle="tab" data-bs-target="#discografia-tab-pane" type="button" role="tab" aria-controls="discografia-tab-pane" aria-selected="false">Discografía</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="Tours" data-bs-toggle="tab" data-bs-target="#tours-tab-pane" type="button" role="tab" aria-controls="tours-tab-pane" aria-selected="false">Tours</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="Fotos" data-bs-toggle="tab" data-bs-target="#fotos-tab-pane" type="button" role="tab" aria-controls="fotos-tab-pane" aria-selected="false">Fotos</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="Tienda" data-bs-toggle="tab" data-bs-target="#tienda-tab-pane" type="button" role="tab" aria-controls="tienda-tab-pane" aria-selected="false">Tienda</button>
          </li>
    </ul>
    <div className="tab-content" id="ventanas"> 
            <div className="tab-pane fade show active"  id="inicio-tab-pane" role="tabpanel" aria-labelledby="inicio-tab" tabIndex="0"  >
                <Inicio/>
            </div>
            <div className="tab-pane fade" id="discografia-tab-pane" role="tabpanel" aria-labelledby="discografia-tab" tabIndex="1">
                <Discografia/>
            </div>
            <div className="tab-pane fade" id="tours-tab-pane" role="tabpanel" aria-labelledby="tours-tab" tabIndex="2">
                <Tours/>
            </div>
            <div className="tab-pane fade" id="fotos-tab-pane" role="tabpanel" aria-labelledby="fotos-tab" tabIndex="3">
                <Fotos/>
            </div>
            <div className="tab-pane fade" id="tienda-tab-pane" role="tabpanel" aria-labelledby="tienda-tab" tabIndex="4">
                <Tienda/>
            </div>
    </div>
</div>
)
}

export default Barra;