import Item from './Item';
import './Tienda2.css';

const ItemList =({items}) =>{
    return(
        <>
        {items.map(item =>
            <div className="col-md-3 mb-4" key={item.id}>
                <Item item={item} />
            </div>
        )}
        </>
    );
}

export default ItemList;