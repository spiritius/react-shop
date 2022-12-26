import { useContext } from 'react';
import { XLg } from 'react-bootstrap-icons';
import { CustomContext } from "../hooks/ShopContext";

export function CartItem(props) {
    const { 
        id,
        name, 
        count, 
        price, 
    } = props;

    const {
        removeProduct = Function.prototype,
        changeProductCount = Function.prototype,
    } = useContext(CustomContext);

    return (
        <div className="row my-3 align-items-center">
            <div className="col">{name}</div>
            <div className="col-auto text-center text-muted cart-count">
                <button 
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => changeProductCount(id, 'decrement')}
                    disabled={count <= 1}
                >-</button>
                <span className="mx-3">{count}</span>
                <button 
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => changeProductCount(id, 'increment')}
                >+</button>
            </div>
            <div className="col-2 text-end">{price} V</div>
            <div className="col-2 text-end"><strong>{count*price} V</strong></div>
            <div className="col-1 text-end">
                <button 
                    className="btn btn-link text-danger" 
                    title="Delete item from cart"
                    onClick={() => removeProduct(id)}
                ><XLg /></button>
            </div>
        </div>
    )
}