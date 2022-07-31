
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
            const data = fetchRequest();
            console.log(data);
    
        } catch (error) {
            console.log(error);
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
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
        }
        catch(error) {
            console.log(error);
        }
    }
}