import './Vistas/PagTS.css'
import React from 'react';


const PagTS = ({ titulo }) => {
    return (
        <div className="PagTS-container"> 
            <BotonVista titulo={titulo}/>
        </div>
    )
}

const BotonVista = ({titulo}) => {
    const handleClick = () => {
        window.location.href = 'https://www.taylorswift.com/';
    }
    return (
        <button className="btn btn-official-site" onClick={handleClick}>{titulo}</button>
    )
}
export default PagTS;

