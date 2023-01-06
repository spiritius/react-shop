import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const CustomContext = createContext();

const initState = {
    // products: [],
    loading: true,
    order: [],
    cartShow: false,
    toastName: '',
    btnText: 'Add to cart',
}

export const ShopContext = (props) => {
    const [ value, dispatch ] = useReducer(reducer, initState);

    // добавить в козину
    value.addProduct = (product) => {
        dispatch({type: 'ADD_PRODUCT', payload: product})
    }

    // закрыть тост "товар добавлен в корзину"
    value.closeToast = () => {
        dispatch({type: 'CLOSE_TOAST'})
    }

    // показать/скрыть корзину
    value.toggleCart = () => {
        dispatch({type: 'TOGGLE_CART'})
    }

    // убрать из корзины/заказа
    value.removeProduct = (productId) => {
        dispatch({type: 'REMOVE_PRODUCT', payload: {id: productId}})
    }

    // изменение кол-ва товара в корзине
    value.changeProductCount = (productId, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT_COUNT', 
            payload: {
                id: productId,
                type: type
            }
        })
    }

    // // текст на кнопке
    // value.changeBtnText = (productId) => {
    //     dispatch({type: 'CHANGE_BTN_TEXT', payload: productId})
    // }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}