import { useState, useEffect } from 'react';
import './Vistas/Tienda.css';
import listado from './jsons/productosTienda.json';

const FetchML = () => {
    const [productos, setProductos] = useState([]);//sera un estado que tendra una lista o coleccion o arreglo, con esto determino que productos sera algo de eso
    const [loading, setLoading] = useState(true);//sera un estado que contendra un booleano
    const [filtro, setFiltro] = useState('');//sera un estado que contendra un string
    const [categoriaSeleccionada, setCategoriaSeleccionada]= useState('Todo');
    // Extraer categorías únicas del listado
    const categorias = [
        'Todo',//es el primer elemento y muestra todos los elementos sin filtro
        ...Array.from(new Set(listado.map(producto => {//crea un nuevo listado que elimina elementos duplicados, los ... lo convierte en un arreglo
            //el mapeo clasifica cada producto del listado en una categoria segun si su titulo contiene una palabra determinada 
            if (producto.title.toLowerCase().includes('cd') || producto.title.toLocaleLowerCase().includes('album'))
                return 'Discos';
            if (producto.title.toLowerCase().includes('vinilo')) 
                return 'Vinilos';
            if (producto.title.toLowerCase().includes('taza')) 
                return 'Tazas';
            if (producto.title.toLowerCase().includes('buzo')) 
                return 'Ropa';
            return 'Otros';
        })))// Elimina 'Otros' de la lista generada
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
    
    // Filtrar productos basados en la búsqueda
    const productosFiltrados = productos.filter(producto => {
        const coincideBusqueda = producto.title.toLowerCase().includes(filtro.toLowerCase());//filtra segun la palabra que busco
        const coincideCategoria = categoriaSeleccionada === 'Todo' || //filtra segun la categoria
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
    });
    
    // Manejador para el campo de búsqueda
    const manejadorDeFiltro = (e) => {
        setFiltro(e.target.value); //cambia el estado del filtro, es decir el string a buscar
    };
    
    return (
        <div id="tienda"className="container-fluid p-4 tienda-container">
            <h1 className="text-center mb-4">Merch de Taylor Swift</h1>{/*titulo de la tienda*/}

            {/* Buscador */}
            <div className="row mb-4">
                <div className="col-md-6 mx-auto">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Buscar productos..." value={filtro} onChange={manejadorDeFiltro}/>
                        <button className="btn btn-primary">
                            <i className="bi bi-search"></i> Buscar
                        </button>
                    </div>
                </div>
            </div> 

            {/* Categorías */}
            <div className="row mb-4">
                <div className="col-12 d-flex justify-content-center">
                    <div className="btn-group" role="group" aria-label="Categorías">
                        {categorias.map(categoria => (
                            <button key={categoria}type="button"className={`btn ${categoriaSeleccionada === categoria ? 'btn' : 'btn-outline'}`}onClick={() => setCategoriaSeleccionada(categoria)}>{categoria}</button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Subtitulo de la tienda */}
            <div className="row mb-3">
                <div className="col-12 text-center">
                    <span className="badge bg-info text-dark">Encuentra la mejor merch de Taylor Swift</span>
                </div>
            </div> 
            
            {/* Productos */}
            {loading ? (//si esta cargando con el timeout de 5segs muestra esto
                <div className="d-flex justify-content-center my-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>) : (//una vez que termina de cargar, muestra todo el contenido de la tienda que seria esto
                <div className="row">
                    {productosFiltrados.length > 0 ? ( 
                        productosFiltrados.map(producto => (
                            <div className="col-md-3 mb-4" key={producto.id}> {/*crea una card para cada item del json*/}
                                <div className="card h-100 producto-card">
                                    <div className="img-container">
                                        <img src={producto.thumbnail} className="card-img-top" alt={producto.title} onError={(e) => {e.target.src = "https://via.placeholder.com/150?text=Imagen+no+disponible";}}/>
                                    </div>
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{producto.title}</h5>
                                        <div className="mt-auto">
                                            <p className="card-text precio">${producto.price.toLocaleString('es-AR')}</p> {/*pone el precio como es en argentina*/}                     
                                            {producto.shipping.free_shipping && (<span className="badge bg-success mb-2">Envío gratis</span>)}
                                            <a href={producto.permalink} className="btn btn-primary w-100 mt-2"target="_blank" rel="noopener noreferrer"> Ver detalles </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (//si no hay contenido es decir el listado esta vacio, se muestra esto
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