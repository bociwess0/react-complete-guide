import { useReducer } from "react";
import CartContext from "./card-context";

//It's this defaultCartState,
// which I return here in cartReducer.
const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        // const updatedItems = state.items.concat(action.item);
        //Concat is a built-in method in JavaScript, which adds a new item to an array
        //It give's us a brand new array instead of editing the old array in memory
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        //findIndex() is a build-in methond in JS which find the index of an item in array.
        //We're now checking if an items we're adding alredy exist in our array of items (true/false) and returnig his index

        const existingCartItem = state.items[existingCartItemIndex];
        //we're now accessing the index of this item and store it in variable existingCartItem

        let updatedItem;
        let updatedItems;

        if(existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            //if the existingCartItem is there then we're declaring a new object updatedItem where we store our existingItem
            //but we're changing it's amount
            updatedItems = [...state.items];
            //in our new array of items we're storing our old array of items
            updatedItems[existingCartItemIndex] = updatedItem;
            //but we're chaning old item with for etc. (4 + 2) amounts of sushi to 6 amounts of sushi
        
        }
        else {
            updatedItem={...action.item};
            updatedItems = state.items.concat(updatedItem);
            //if item is adding for the first time is just adding into teh cart

        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;
        if(existingCartItem.amount === 1){
            //if item's amount is down to one then we're removing this item
            updatedItems = state.items.filter(item => item.id !== action.id);
            //we're removing item from array, actually we're keeping in array all items that theire id's are not equal to 
            //item we're gonna remove
        } else {
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
            //decreasing an amount
            updatedItems = [...state.items];
            updatedItems [existingCartItemIndex] = updatedItem;
        }
        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = (props) => {
    //useReducer return ann array with exatcly 2 elements same as useState
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    //cartStates's inital value is an Object defaultCartState that we going to change in the future

    //with dispatchCartAction we're dispatching to our carReducer function what kind of an action we want to execute
    //etc. ADD an item to Cart or REMOVE it from Cart

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    }

    const removeITemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    const cartContext ={
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeITemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;