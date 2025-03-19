import './Tienda2.css';
import ItemCount from './ItemCount';
import { useEffect } from 'react';

const Item =({item}) =>{
   
   return(
    <div className="card h-100 item-card">
      <div className="img-container">
         <img src={item.thumbnail} className="card-img-top" alt={item.title} onError={(e) => {e.target.src = "https://via.placeholder.com/150?text=Imagen+no+disponible";}}/>
      </div>
      <div className="card-body d-flex flex-column">
         <h5 className="card-title">{item.title}</h5>
         <div className="mt-auto">
            <p className="card-text precio">${item.price.toLocaleString('es-AR')}</p> {/*pone el precio como es en argentina*/}                     
            {item.shipping.free_shipping && (<span className="badge bg-success mb-2">Envío gratis</span>)}
            <ItemCount stock={item.stock} />  
            <a href={item.permalink} className="btn btn-primary w-100 mt-2"target="_blank" rel="noopener noreferrer"> Ver detalles </a>
         </div>
      </div>
    </div>
   ); 
}

export default Item;