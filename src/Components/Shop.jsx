import { useState, useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';
import { CustomContext } from '../hooks/ShopContext';
import { Preloader } from "./Preloader";
import { ProductsList } from './ProductsList';
import { Toast } from "./Toast";

export function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { 
        toastName = '', 
        closeToast = Function.prototype,
    } = useContext(CustomContext);

    // однократное получение списка товаров при начальном рендере
    useEffect(() => {
        fetch(API_URL, { 
            headers: {
                'Authorization': API_KEY
            } 
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch');
                }
            })
            .then(data => {
                setProducts(data.featured);
                setLoading(false);
            })
    }, []);

    return(
        <main className="container py-4">
            {
                loading ? <Preloader /> : <ProductsList products={products} />
            }
            {
                toastName ? <Toast name={toastName} closeToast={closeToast} /> : ''
            }
        </main>
    )
}