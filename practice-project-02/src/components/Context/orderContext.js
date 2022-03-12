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
    onAddOrder: (cartItem) => {},
});

export const OrderContextProvider = (props) => {
    const [ordersNumber, setOrdersNumber] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [meals, setMeals] = useState(DUMMY_MEALS);

    const addOrderHandler = (cartItem) => {
        setOrdersNumber(ordersNumber + parseInt(cartItem.amount));
        setCartItems((prevItems) => {
            return [cartItem, ...prevItems];
        });
      
    }

    return <OrderContext.Provider value={{meals: meals ,
                                          cartItems: cartItems, 
                                          ordersNumber: ordersNumber, 
                                          onAddOrder: addOrderHandler,}}>{props.children}</OrderContext.Provider>
}

export default OrderContext;