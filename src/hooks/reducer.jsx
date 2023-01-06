export function reducer(state, {type, payload}) {
    // action = { type, payload }

    switch (type) {
        case 'ADD_PRODUCT':
            const foundIndex = state.order.findIndex(item => item.id === payload.id);
            let newOrder = [];
            if (foundIndex > -1) { // товар есть в списке заказов
                newOrder = state.order.map((item, index) =>{
                    if (index === foundIndex) {
                        return {
                            ...item,
                            count: item.count++
                        }
                    } else {
                        return item;
                    }
                });
            } else { // товара нет в списке заказов
                newOrder = [...state.order, payload];
            }
            return {
                ...state,
                order: newOrder,
                toastName: payload.name
            }
        case 'CLOSE_TOAST':
            return {
                ...state,
                toastName: ''
            }
        case 'TOGGLE_CART':
            return {
                ...state,
                cartShow: !state.cartShow
            }
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                order: state.order.filter(item => item.id !== payload.id)
            }
        case 'CHANGE_PRODUCT_COUNT':
            return {
                ...state,
                order: state.order.map(item => {
                    if (item.id === payload.id) {
                        if (payload.type === 'decrement' && item.count>1) {
                            return {
                                ...item,
                                count: item.count--
                            }
                        }
                        if (payload.type === 'increment') {
                            return {
                                ...item,
                                count: item.count++
                            }
                        }
                    }
                    return item;
                })
            }
        // case 'CHANGE_BTN_TEXT':
        //     console.log(payload.id);
        //     if (state.order.find(item => item.id === payload.id)) {
        //         console.log('true');
        //         return {
        //             ...state,
        //             btnText: '+1'
        //         }
        //     }
        //     return {
        //         ...state,
        //         btnText: 'Add to cart'
        //     }
        //
        default:
            return state;
    }
}