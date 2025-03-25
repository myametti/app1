import industria from './Tabs/Vistas/imagenes/industria.jpg'
import React, { useEffect, useState } from 'react';

const Noticias = ({imagenes = [], title = [], text = []}) => {
  // nos aseguramos de que al menos nos vino 1 data y que sino se ponga una predeterminada
  const cardNoticias = [{
      title: title.length > 0 ? title : [{ t: 'Taylor Swift: La industria musical' }],
      text: text.length > 0 ? text : ['No hay mas que decir.'],
      imageUrls: imagenes.length > 0 ? imagenes : [industria]
  }];

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
    const [isMobile, setIsMobile] = useState(false);

    //resize para los botones
    useEffect(() => {
        const chequeoTamañoPantalla = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        chequeoTamañoPantalla();
        
        //añado oyente
        window.addEventListener('resize', chequeoTamañoPantalla);
        
        //limpio para fugas
        return () => {
            window.removeEventListener('resize', chequeoTamañoPantalla);
        };
    }, []);
 
    //nos aseguramos de no irnos de rango
 const rango = (index, length) => {
  return ((index % length) + length) % length;
};

const handleNextImage = () => {
setCurrentImageIndex((prevIndex) => rango(prevIndex + 1, imageUrls.length));
modificarSiguiente();
};

const modificarSiguiente = () => {
setCurrentTitleIndex((prevIndex) => rango(prevIndex + 1, title.length));
setCurrentTextIndex((prevIndex) => rango(prevIndex + 1, text.length));
}

const handlePrevImage = () => {
setCurrentImageIndex((prevIndex) => rango(prevIndex - 1, imageUrls.length));
modificarAnterior();
};

const modificarAnterior = () => {
setCurrentTitleIndex((prevIndex) => rango(prevIndex - 1, title.length));
setCurrentTextIndex((prevIndex) => rango(prevIndex - 1, text.length));
}
    
    //me va a mostrar por consola el titulo de la noticia que se esta mostrando en ese momento, ya que me estoy fijando en el estado del titulo actual, se ejecuta el useEffect cuando
    //apreto siguiente o anterior, ya que ahi se genera un cambio de estado en mi sistema
    //si yo usara title[currentTitleIndex] me estaria fijando en un valor especifico de la lista title, entonces react no se estaria fijando en el estado current sino en el valor en esta posicion
    //si el valor en title[current] no cambia, el efcto no se ejecutara, aunque el current si cambie
    //es decir, el current puede cambiar, puede ser 0 1 2 3..., pero title[current] puede ser siempre el mismo, es decir title[0] siemrpe es la foto 1

    //MAP: el metodo map() nos permit generar un neuvo array tomando de base otro array y utilizando una funcion transformadora
    //en react con el map podremos hacer render de una coleccion de objetos
    useEffect(()=> {
       // console.log("noticia es: " + title[currentTitleIndex]);
       // console.log(title.map(titulo=> titulo.t)); // ['Taylor en los Grammys!', 'Nuevo Album!'] me lo muestra como si fuera un arreglo
      // console.log(title.map(titulo=> titulo.t).join(','));// Taylor en los Grammys!, Nuevo Album! me lo muestra directamente uniendo cada elemento

     //  console.log(title.map(titulo => ({titulos: titulo.t})) )//esto hace que se me cree un nuevo arreglo con objetos que tengan cada uno de los titulos de mi arreglo
        //si yo quisiera puedo agregar cambios a hacer, por ejemplo algun useState, poner algun set... cuando hay un cambio de estado
    },[currentTitleIndex,title]);

    //nos asdeguramos de tener algo en las constantes
    const currentTitle = title[currentTitleIndex]?.t || 'Taylor Swift: La industria musical';
    const currentText = text[currentTextIndex] || 'No hay mas que decir';
    const currentImage = imageUrls[currentImageIndex] || 'industria';

    return (
      <div className="card" id="cardNoticias">
        <img src={currentImage} className="card-img-top" alt={currentTitle} /> 
        <div className="card-body">
          <h5 className="card-title">{currentTitle}</h5>
          <p className="card-text">{currentText}</p>
          <div className="card-navigation-container">
            <button className="btn btn-navigation btn-prev" onClick={handlePrevImage}>{isMobile ? '<' : 'Anterior'}</button>
            <button className="btn btn-navigation btn-next" onClick={handleNextImage}>{isMobile ? '>' : 'Siguiente'}</button>
          </div>
        </div>
      </div>
    );
  };

export default Noticias;