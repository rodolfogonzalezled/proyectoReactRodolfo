import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ products }) => {

    return (
        <div className='ItemContainer'>
            {products.map(product => <Item key={product.id} {...product} />)}
        </div>
    );
}

export default ItemList;