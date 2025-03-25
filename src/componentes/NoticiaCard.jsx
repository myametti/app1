import industria from './Tabs/Vistas/imagenes/industria.jpg';
import React, { useState, useEffect } from 'react';

const NoticiaCard = ({noticia}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    
    // Ensure we're accessing the correct property - 'imagenes' instead of 'images'
    const fotos = noticia && noticia.imagenes && Array.isArray(noticia.imagenes) ? noticia.imagenes : [industria];

    // Check screen size for responsive buttons
    useEffect(() => {
        const chequeoTamañoPantalla = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        chequeoTamañoPantalla();
        window.addEventListener('resize', chequeoTamañoPantalla);
        
        return () => {
            window.removeEventListener('resize', chequeoTamañoPantalla);
        };
    }, []);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % fotos.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => ((prevIndex - 1 + fotos.length) % fotos.length));
    };

    return (
        <div className="card noticia-card">
            <div className="noticia-image-container">
                <img src={fotos[currentImageIndex] || industria} className="card-img-top noticia-img" alt={noticia.titulo || "Noticia"} onError={(e) => {e.target.src = industria}}/>
            </div>
            <div className="card-body">
                <h5 id="titulo"className="card-title">{noticia.titulo || "Título de noticia"}</h5>
                {noticia.fecha && <p className="card-date">{noticia.fecha}</p>}
                <p className="card-text">{noticia.texto || "No hay información disponible."}</p>
                <div className="card-navigation-container">
                    <button className="btn btn-navigation btn-prev" onClick={handlePrevImage}disabled={fotos.length <= 1}>{isMobile ? '<' : 'Anterior'}</button>
                    <button className="btn btn-navigation btn-next" onClick={handleNextImage}disabled={fotos.length <= 1}>{isMobile ? '>' : 'Siguiente'}</button>
                </div>
            </div>
        </div>
    );
}

export default NoticiaCard;