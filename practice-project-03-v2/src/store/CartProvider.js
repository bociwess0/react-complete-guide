import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState ={
    items: [],
    totalAmount: 0
}

const CartReducer = (state, action) => {
    if(action.type === 'ADD') {
        let updatedItems = state.items.concat(action.item);
        let updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === 'REMOVE') {
        const targetedItemIndex = state.items.findIndex((item) => item.id === action.id);
        const targetedItem = state.items[targetedItemIndex];
        let updatedTotalAmount = state.totalAmount - targetedItem.price;
        let updatedItems;
        
        if(targetedItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        else {
            const updatedItem = {...targetedItem, amount: targetedItem.amount -1}
            updatedItems = [...state.items];
            updatedItems[targetedItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(CartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}

export default CartProvider;