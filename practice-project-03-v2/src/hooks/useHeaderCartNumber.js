import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";

const useHeaderCartNumber = () => {
    const [headerCartButton, setHeaderCartButton] = useState(0);
    const cartCtx = useContext(CartContext);
    useEffect (()=> {
        let sum = 0;
        for(let i = 0; i < cartCtx.items.length; i++) {
            sum += cartCtx.items[i].amount;
        }
        setHeaderCartButton(sum);
    }, [cartCtx.items])

    return headerCartButton;
}

export default useHeaderCartNumber;