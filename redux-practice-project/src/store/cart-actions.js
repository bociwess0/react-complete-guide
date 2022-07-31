import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";


export const fetchCartData = () => {
    return async (dispatch) => {

        const fetchRequest = async() => {

            const response = await fetch('https://redux-practice-ebddd-default-rtdb.firebaseio.com/cart.json');


            if(!response.ok) {
                throw new Error('Fetching data failed!')
            }

            const data = await response.json();

            return data;
        }

        try {
            const cartData = await fetchRequest();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
            
              
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  message: 'Fetching cart data failed!',
                })
              );
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {

        dispatch(
            uiActions.showNotification({
              status: 'pending',
              message: 'Sending cart data!',
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://redux-practice-ebddd-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity})
            })

            if(!response.ok) {
                throw new Error('Sending data failed!')
            }
        }

        try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  message: 'Data has been successfully sent to the database!',
                })
              );
        }
        catch(error) {
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  message: 'Sending cart data failed!',
                })
              );
        }
    }
}