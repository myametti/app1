import React, { useState, useEffect } from 'react';
import './Tabs/Vistas/Noticias.css';
import industria from './Tabs/Vistas/imagenes/industria.jpg';
import arregloNoticias from './Tabs/jsons/noticias.json';
import NoticiaCard from './NoticiaCard';

const Noticias = () => {
    // Filter out empty news items from JSON
    const [noticias, setNoticias] = useState([]);
    
    useEffect(() => {
        // Filter out news items with empty titles
        const validNoticias = arregloNoticias.filter(noticia => 
            noticia.titulo && noticia.titulo.trim() !== ''
        );
        
        if (validNoticias.length > 0) {
            setNoticias(validNoticias);
        } else {
            //backup por si no hay noticias
            setNoticias([{
                id: "default",
                fecha: "2025",
                titulo: "Taylor Swift: La industria musical",
                texto: "No hay mas que decir.",
                imagenes: [industria]
            }]);
        }
    }, []);

    return (
        <div className="noticias-container">
            <div className="row">
                {noticias.map((noticia) => (
                    <div key={noticia.id} className="col-md-6 mb-4">
                        <NoticiaCard noticia={noticia} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Noticias;