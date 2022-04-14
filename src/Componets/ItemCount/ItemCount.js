import { useState } from 'react';
import { useNotification } from '../../Notification/Notification'
import Button from 'react-bootstrap/Button';
import './ItemCount.css'

const ItemCount = ({ stock, initialCount = 1, onAdd }) => {
    const [count, setCount] = useState(initialCount);
    const { setNotification } = useNotification()
    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
            setNotification('otherClass', `Solo hay disponible ${stock} unidades de éste producto`, 'Info')
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className='ContainerCount'>
            <div className='ItemCount'>
                <Button onClick={decrement} variant="outline-secondary" size="lg"> ➖ </Button>
                <h2 className='Count' >{count}</h2>
                <Button onClick={increment} variant="outline-secondary" size="lg"> ➕ </Button>
            </div>
            <Button onClick={() => onAdd(count)} className='AddCart' variant="outline-success">Agregar al carrito</Button>
        </div>
    );
};

export default ItemCount;