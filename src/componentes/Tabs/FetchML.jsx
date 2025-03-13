import { useState, useEffect } from 'react';
import './Vistas/Tienda.css';
import listado from './productosTienda.json';

const FetchML = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filtro, setFiltro] = useState('');
    
    useEffect(() => {
        // Simulamos un tiempo de carga para que se vea más realista
        console.log("Cargando datos simulados...");
        setTimeout(() => {
            setProductos(listado);
            setLoading(false);
        }, 1000);
    }, []);
    
    // Filtrar productos basados en la búsqueda
    const productosFiltrados = productos.filter(producto => 
        producto.title.toLowerCase().includes(filtro.toLowerCase())
    );
    
    // Manejador para el campo de búsqueda
    const handleFiltroChange = (e) => {
        setFiltro(e.target.value);
    };
    
    return (
        <div className="container-fluid p-4 tienda-container">
            <h1 className="text-center mb-4">Tienda Taylor Swift</h1>
            
            {/* Buscador */}
            <div className="row mb-4">
                <div className="col-md-6 mx-auto">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar productos..."
                            value={filtro}
                            onChange={handleFiltroChange}
                        />
                        <button className="btn btn-primary">
                            <i className="bi bi-search"></i> Buscar
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Indicador de datos simulados */}
            <div className="row mb-3">
                <div className="col-12 text-center">
                    <span className="badge bg-info text-dark">
                        Usando datos simulados para desarrollo
                    </span>
                </div>
            </div>
            
            {/* Productos */}
            {loading ? (
                <div className="d-flex justify-content-center my-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            ) : (
                <div className="row">
                    {productosFiltrados.length > 0 ? (
                        productosFiltrados.map(producto => (
                            <div className="col-md-3 mb-4" key={producto.id}>
                                <div className="card h-100 producto-card">
                                    <div className="img-container">
                                        <img 
                                            src={producto.thumbnail} 
                                            className="card-img-top" 
                                            alt={producto.title}
                                            onError={(e) => {
                                                e.target.src = "https://via.placeholder.com/150?text=Imagen+no+disponible";
                                            }}
                                        />
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{producto.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text precio">
                                                ${producto.price.toLocaleString('es-AR')}
                                            </p>
                                            
                                            {producto.shipping.free_shipping && (
                                                <span className="badge bg-success mb-2">Envío gratis</span>
                                            )}
                                            
                                            <a 
                                                href={producto.permalink} 
                                                className="btn btn-primary w-100 mt-2"
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                Ver detalles
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center my-5">
                            <h3>No se encontraron productos</h3>
                            <p>Intenta con otra búsqueda</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FetchML;