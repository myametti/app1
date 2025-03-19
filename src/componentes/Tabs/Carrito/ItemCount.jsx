import { useEffect, useState } from "react";
import './Tienda2.css';

const ItemCount = ({ stock }) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    };

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    };

    const onAdd = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
            alert(`Agregaste ${items} productos al carrito`);
        }
    };

    useEffect(() => {
        setItemStock(itemStock);
        if(itemStock===0){
            setItems(0);

        }
    }, [itemStock,items]);

    return (
        <div className="item-count-container">
            <div className="row">
                <div className="col">
                    <div className="item-count-buttons">
                        <button type="button" onClick={decrementarStock}>-</button>
                        <span>{items}</span>
                        <button type="button" onClick={incrementarStock}>+</button>
                    </div>
                    {itemStock===1 ?(
                                    <div>
                                        <h6 style={{color:"lightgrey", textAlign:"center"}}>¡Aprovecha es el último!</h6>
                                        <button className="btn btn-primary add-to-cart-btn" onClick={onAdd}>Agregar al carrito</button>
                                    </div>
                                ): items===0? (
                                            <h6 style={{color:"lightgrey", textAlign:"center"}}>¡No hay stock!</h6> 
                                                ):  (
                                                    <div>
                                                        <h6 style={{color:"lightgrey", textAlign:"center"}}>Aun quedan {itemStock} en stock</h6>
                                                        <button className="btn btn-primary add-to-cart-btn" onClick={onAdd}>Agregar al carrito</button>
                                                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemCount;