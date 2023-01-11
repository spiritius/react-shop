import { Product } from "./Product";

export function ProductsList(props) {
    const { products = [] } = props;

    if (!products.length) {
        return <h6>There are no products for today</h6>
    }
    return ( <div className="grid">
        {
            products.map(item => {
                return <Product key={item.id} {...item} />
            })
        }
    </div>
    )
}