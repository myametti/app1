import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import './Tienda2.css';
import listado from '../jsons/productosTienda.json';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filtro, setFiltro] = useState('');
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todo');
    
    // Extraer categorías únicas del listado
    const categorias = [
        'Todo',
        ...Array.from(new Set(listado.map(producto => {
            if (producto.title.toLowerCase().includes('cd') || producto.title.toLowerCase().includes('album'))
                return 'Discos';
            if (producto.title.toLowerCase().includes('vinilo')) 
                return 'Vinilos';
            if (producto.title.toLowerCase().includes('taza')) 
                return 'Tazas';
            if (producto.title.toLowerCase().includes('buzo')) 
                return 'Ropa';
            return 'Otros';
        })))
        .filter(categoria => categoria !== 'Otros'), 'Otros' // Añade 'Otros' al final
    ];

    useEffect(() => {
        // Simulamos un tiempo de carga para que se vea más realista
        console.log("Cargando tienda...");
        setCategoriaSeleccionada('Todo');
        setTimeout(() => {
            setProductos(listado);
            setLoading(false);
        }, 3000);
    }, []);
    
    // Filtrar productos basados en la búsqueda y categoría
    const productosFiltrados = productos && productos.length 
        ? productos.filter(producto => {
            const coincideBusqueda = producto.title.toLowerCase().includes(filtro.toLowerCase());
            const coincideCategoria = categoriaSeleccionada === 'Todo' || 
                (categoriaSeleccionada === 'Discos' && (producto.title.toLowerCase().includes('cd') || producto.title.toLowerCase().includes('album'))) ||
                (categoriaSeleccionada === 'Vinilos' && producto.title.toLowerCase().includes('vinilo')) ||
                (categoriaSeleccionada === 'Ropa' && producto.title.toLowerCase().includes('buzo')) ||
                (categoriaSeleccionada === 'Tazas' && producto.title.toLowerCase().includes('taza')) ||
                (categoriaSeleccionada === 'Otros' && 
                    !producto.title.toLowerCase().includes('cd') && 
                    !producto.title.toLowerCase().includes('album') && 
                    !producto.title.toLowerCase().includes('taza') && 
                    !producto.title.toLowerCase().includes('entrada'));
            
            return coincideBusqueda && coincideCategoria;
        })
        : [];
    
    // Manejador para el campo de búsqueda
    const manejadorDeFiltro = (e) => {
        setFiltro(e.target.value);
    };

    return (
        <div className="container-fluid p-4 tienda-container">
            <h1 className="text-center mb-4">Merch de Taylor Swift</h1>
            
            {/* Buscador */}
            <div className="row mb-4">
                <div className="col-md-6 mx-auto">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Buscar productos..." value={filtro} onChange={manejadorDeFiltro}/>
                        <button className="btn btn-primary"><i className="bi bi-search"></i> Buscar</button>
                    </div>
                </div>
            </div>
            
            {/* Categorías */}
            <div className="row mb-4">
                <div className="col-12 d-flex justify-content-center">
                    <div className="btn-group" role="group" aria-label="Categorías">
                        {categorias.map(categoria => (
                            <button key={categoria} type="button" className={`btn ${categoriaSeleccionada === categoria ? 'btn' : 'btn-outline'}`} onClick={() => setCategoriaSeleccionada(categoria)}>{categoria}</button>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Subtitulo de la tienda */}
            <div className="row mb-3">
                <div className="col-12 text-center">
                    <span className="badge bg-info text-dark">
                        Encuentra la mejor merch de Taylor Swift
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
                        <ItemList items={productosFiltrados} />
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

export default ItemListContainer;