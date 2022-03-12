import React, { useState } from "react";

const OrderContext = React.createContext({
    ordersNumber: 0,
    onAddOrder: (numberOfOrders) => {}
});

export const OrderContextProvider = (props) => {
    const [ordersNumber, setOrdersNumber] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const addOrderHandler = (numberOfOrders) => {
        setOrdersNumber(ordersNumber + parseInt(numberOfOrders));
    }

    return <OrderContext.Provider value={{ordersNumber: ordersNumber, onAddOrder: addOrderHandler}}>{props.children}</OrderContext.Provider>
}

export default OrderContext;