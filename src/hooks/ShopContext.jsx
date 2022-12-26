import { createContext } from "react";
import { useState, useRef } from "react";

export const CustomContext = createContext();

export const ShopContext = (props) => {
    const [ order, setOrder ] = useState([]);
    const [ cartShow, setCartChow ] = useState(false);
    const modalRef = useRef('');
    const [ toastName, setToastName ] = useState('');

    const toggleCart = () => {
        setCartChow(!cartShow);
    }

    const addProduct = (product) => {
        let found = order.find(item => item.id === product.id);
        if (found) {
            found.count++;
        } else {
            order.push(product);
        }
        setOrder([...order]);
        setToastName(product.name);
    }

    const removeProduct = (productId) => {
        setOrder(order.filter(item => item.id !== productId));
    }

    const changeProductCount = (productId, type) => {
        const newOrder = order.map(item => {
            if (item.id === productId) {
                if (type === 'decrement' && item.count>1) item.count--;
                if (type === 'increment') item.count++;
            }
            return item;
        });
        setOrder(newOrder);
    }

    const closeToast = () => {
        setToastName('');
    }

    const changeBtnText = (productId) => {
        if (order.find(item => item.id === productId)) {
            return '+1'
        } 
        return 'Add to cart';
    }

    const value = {
        order,
        addProduct,
        modalRef,
        cartShow,
        toggleCart,
        removeProduct,
        changeProductCount,
        toastName,
        closeToast,
        changeBtnText,
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}