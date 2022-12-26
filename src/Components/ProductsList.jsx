import { useContext } from "react";
import { CustomContext } from "../hooks/ShopContext";
import { Product } from "./Product";

export function ProductsList(props) {
    const { products = [] } = props;
    const { changeBtnText = Function.prototype } = useContext(CustomContext);
    
    if (!products.length) {
        return <h6>There are no products for today</h6>
    }
    return ( <div className="grid">
        {
            products.map(item => {
                return <Product key={item.id} btnText={changeBtnText(item.id)} {...item} />
            })
        }
    </div>
    )
}