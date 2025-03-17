
import {/* useState,*/ useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'
import './Vistas/Tours.css'
import tours from './jsons/arregloTours.json'

const Tours = () => {
 /* const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); */

  useEffect(() => {
    const carousel= document.getElementById("carouselTours");
    const prevButton= document.querySelector(".carousel-control-prev");
    const nextButton= document.querySelector(".carousel-control-next");

    const scrollToTop =()=>{
      window.scrollTo ({top:0, behavior :"smooth"});
    }

    prevButton.addEventListener("click", scrollToTop);
    nextButton.addEventListener("click", scrollToTop);
    const scrollToCard =() =>{
      setTimeout(()=>{
        const activeCard = document.querySelector(".carousel-item.active .card");
        if (activeCard) {
          activeCard.scrollIntoView({behavior:"smooth", block:"start"});
        }
      }, 500);
    };
    carousel.addEventListener("slid.bs.carousel", scrollToCard);
    return ()=>{
      carousel.removeEventListener("slid.bs.carousel", scrollToCard);
      prevButton.removeEventListener("click", scrollToTop);//siempre luego remuevo apra evitar fugas de memoria, es como el malloc y el free
      nextButton.removeEventListener("click", scrollToTop);//cuando se vuelve a renderizar los eventos anteriores seguirian existiendo, perjudicando el rendimiento
    }
  }, []);

  return (
    <div className="Tours container-fluid g-0">
      <div id="carouselTours" className="carousel slide" data-bs-ride="carousel">
        {/* Indicadores */}
        <ol className="carousel-indicators">
          {tours.map((_, index) => (
            <li 
              key={index} 
              data-bs-target="#carouselTours" 
              data-bs-slide-to={index} 
              className={index === 0 ? "active" : ""}
            ></li>
          ))}
        </ol>

        {/* Slides */}
        <div className="carousel-inner">
          {tours.map((tour, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} id={`${tour.id}`}>
              <div className="tour-content">
                <div className="tour-image-container">
                  <img className="tour-image img-fluid" src={tour.imagen} alt={tour.titulo} />
                </div>
                <div className="tour-card card text-center p-3" id={`a${tour.id}`}>
                  <h5 className="card-title">{tour.titulo}</h5>
                  <div className="card-text" >
                    <p>{tour.album}</p>
                    <p>{tour.paises}</p>
                    <p>{tour.shows}</p>
                    <p>{tour.recaudacion}</p>
                    <p>{tour.datos}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselTours" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselTours" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
}

export default Tours;
