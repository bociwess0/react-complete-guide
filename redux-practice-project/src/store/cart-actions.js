

export const sendCartData = (cart) => {
    return async (dispatch) => {
      
      const sendRequest = async () => {
        const response = await fetch(
          'https://redux-practice-ebddd-default-rtdb.firebaseio.com/cart.json',
          {
            method: 'PUT',
            body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
          }
        );
  
        if (!response.ok) {
          throw new Error('Sending cart data failed.');
        }
      };
  
      try {
        await sendRequest();

      } catch (error) {
        console.log(error);
      }
    };
  };