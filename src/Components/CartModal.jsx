import { useContext } from "react";
import { CustomContext } from "../hooks/ShopContext";
import { CartItem } from "./CartItem"

export function CartModal(props) {
    const { order = [] } = props;

    const { 
        toggleCart = Function.prototype,
        cartShow = false,
    } = useContext(CustomContext);

    const totalCount = order.reduce((sum, el) => sum + el.count, 0);
    const totalPrice = order.reduce((sum, el) => sum + el.count * el.price, 0);

    return (
        <div 
            className={cartShow ? 'd-block modal' : 'modal'}
            style={{'--bs-modal-width': '670px'}}
            >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleCart}></button>
                    </div>
                    <div className="modal-body">
                        {order.length ? (
                            order.map(item => {
                                return <CartItem 
                                            key={item.id} 
                                            id={item.id}
                                            name={item.name}
                                            count={item.count}
                                            price={item.price}
                                        />
                            })
                        ) : ( 
                            <p>The cart is empty</p>
                        )}
                    </div>
                    {order.length ? (
                        <div className="modal-footer justify-content-between py-4 px-1">
                            <div className="row align-items-center m-0 w-100">
                                <div className="col"><strong className="h5">Total</strong></div>
                                <div className="col-auto text-center text-muted cart-count">{totalCount}</div>
                                <div className="col-2 text-end"></div>
                                <div className="col-2 text-end"><strong>{totalPrice} V</strong></div>
                                <div className="col-1"></div>
                            </div>
                        </div>
                    ) : ('')}
                    
                </div>
            </div>
        </div>
    )
}