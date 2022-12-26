import { useContext } from "react";
import { CustomContext } from "../hooks/ShopContext";
import { Cart2 } from 'react-bootstrap-icons';
import { CartModal } from "./CartModal";

export function Cart() {
    const { 
        order = [], 
        toggleCart = Function.prototype 
    } = useContext(CustomContext);

    return (
        <>
            <button className='cart' onClick={toggleCart}>
                <Cart2 size={24} />
                <span className="position-absolute translate-middle badge rounded-pill text-bg-light">
                    {order.length}
                </span>
            </button>
            <CartModal order={order} />
        </>
    )
}