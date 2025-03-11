
import React, { useEffect, useState } from 'react';
const Noticias =({imagenes, title, text}) =>{
    const cardNoticias = [
        {
          title: title,
          text: text,
          imageUrls: imagenes

        }
      ];
    return(
        <div>
        {cardNoticias.map((card, index) => (
          <Noticia key={index} {...card} />
        ))}
      </div>
    )
}

//hook useState: permite a los componentes tener estados, se ejecuta la funcion retornando un arreglo con dos elementos, el primero es el estado actual
//y el segundo es una funcion que se utiliza para actualizar el estado llamandola con un nuevo valor (por ej set...), luego este arreglo se iguala a un useState(valorInicial) que es mi funcion
//react actualiza el valor con cada inicio del ciclo de renderizado, es decir que mi valor cambia cada vez que Noticia se renderiza

//Noticia seria un hijo de Noticias, pero es local, por lo que en Inicio, por ejemplo ya que es el caso que usa a Noticias, no podria acceder a Noticia a menos que lo importe de Noticias
//si creo que al children lo voy a usar para otras cosas, entonces me va a convenir hacerlo un componente aparte
const Noticia = ({ title, text, imageUrls }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      modificarSiguiente();
    };
    
    const modificarSiguiente =() =>{//PUEDO USAR UN USEsTATE PARA IR INTERCAMBIANDO ENTRE DIFERENTES TEXTOS Y NOTICIAS USANDO UN ARREGLO,POR EJEMPLO 3 NOTICIAS Y UN ARREGLO DE
      //3 TEXTOS Y TITULOS POR L QUE SE VA CAMBIANDO EL VALOR
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % title.length);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % text.length);
    }

    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
      modificarAnterior();
    };
    const modificarAnterior=()=>{
      setCurrentTitleIndex((prevIndex) => (prevIndex - 1 + title.length) % title.length);
      setCurrentTextIndex((prevIndex) => (prevIndex - 1 + text.length) % text.length);
    }
    
    //me va a mostrar por consola el titulo de la noticia que se esta mostrando en ese momento, ya que me estoy fijando en el estado del titulo actual, se ejecuta el useEffect cuando
    //apreto siguiente o anterior, ya que ahi se genera un cambio de estado en mi sistema
    //si yo usara title[currentTitleIndex] me estaria fijando en un valor especifico de la lista title, entonces react no se estaria fijando en el estado current sino en el valor en esta posicion
    //si el valor en title[current] no cambia, el efcto no se ejecutara, aunque el current si cambie
    //es decir, el current puede cambiar, puede ser 0 1 2 3..., pero title[current] puede ser siempre el mismo, es decir title[0] siemrpe es la foto 1

    //MAP: el metodo map() nos permit generar un neuvo array tomando de base otro array y utilizando una funcion transformadora
    //en react con el map podremos hacer render de una coleccion de objetos
    useEffect(()=> {
        console.log("noticia es: " + title[currentTitleIndex]);
        console.log(title.map(titulo=> titulo.t)); // ['Taylor en los Grammys!', 'Nuevo Album!'] me lo muestra como si fuera un arreglo
       console.log(title.map(titulo=> titulo.t).join(','));// Taylor en los Grammys!, Nuevo Album! me lo muestra directamente uniendo cada elemento

       console.log(title.map(titulo => ({titulos: titulo.t})) )//esto hace que se me cree un nuevo arreglo con objetos que tengan cada uno de los titulos de mi arreglo
        //si yo quisiera puedo agregar cambios a hacer, por ejemplo algun useState, poner algun set... cuando hay un cambio de estado
    },[currentTitleIndex,title]);
  
    return (
      <div className="card" id="cardNoticias" >
        <img src={imageUrls[currentImageIndex]} className="card" alt={title[currentTitleIndex].t} /> 
        <div className="card-body">
          <h5 className="card-title" >{title[currentTitleIndex].t}</h5>
          <p className="card-text" >{text[currentTextIndex]}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-sm btn-secondary" onClick={handlePrevImage}>Anterior</button>
            <button className="btn btn-sm btn-secondary" onClick={handleNextImage}>Siguiente</button>
          </div>
        </div>
      </div>
    );
  };

export default Noticias;