 import {NavLink} from 'react-router-dom';
 const Error =()=>{

    return(
        <div id="PaginaError" className="container-fluid p-4">
            <div className="row">
            <h1>No se encontro la página :{"("}</h1>
            <NavLink to="/inicio">
            <button id="boton-volver-inicio">Volver al inicio</button>
            </NavLink>
            </div>
        </div>
    );
 }

 export default Error;