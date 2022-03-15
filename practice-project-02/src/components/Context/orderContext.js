import React, { useState } from "react";


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const OrderContext = React.createContext({
    meals: [],
    cartItems: [],
    ordersNumber: 0,
    total: 0,
    onAddOrder: (cartItem) => {},
});

export const OrderContextProvider = (props) => {
    const [ordersNumber, setOrdersNumber] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [meals, setMeals] = useState(DUMMY_MEALS);
    const [sum, setSum] = useState(0);
    

    const addOrderHandler = (cartItem) => {
        setOrdersNumber(ordersNumber + parseInt(cartItem.amount));
        setCartItems(() => {
          const existingCartItemIndex = cartItems.findIndex(
            (item) => item.id === cartItem.id
          );
  
          const existingCartItem = cartItems[existingCartItemIndex];
          let updatedItems;
  
          if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              amount: existingCartItem.amount + cartItem.amount,
            };
            updatedItems = [...cartItems];
            updatedItems[existingCartItemIndex] = updatedItem;
          } else {
            updatedItems = cartItems.concat(cartItem);
          }
          return updatedItems;
        });
        setSum(sum + parseFloat(cartItem.price) * parseInt(cartItem.amount));
    }

    return <OrderContext.Provider value={{meals: meals ,
                                          cartItems: cartItems, 
                                          ordersNumber: ordersNumber,
                                          total: sum, 
                                          onAddOrder: addOrderHandler,}}>{props.children}</OrderContext.Provider>
}

export default OrderContext;