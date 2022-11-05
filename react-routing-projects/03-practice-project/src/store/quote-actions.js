import { useState } from "react"
import { quoteActions } from "./quote-slice";

const statusReducer = (state, action) => {

    if(action.type === 'SEND') {
        return 'pending';
    }

    if(action.type === 'SUCCESS') {
        return 'completed';
    }

    if(action.type === 'ERROR') {
        return 'completed';
    }

    return state;
}


export const fetchQuotes = () => {

    return async (dispatch) => {

        dispatch(quoteActions.replaceQuotes({
            quotes: [],
            status: 'pending'
        }))

        const arrayOfQuotes = [];

        const fetchQuotes = async () => {
            
            const response = await fetch ('https://react-routing-42d52-default-rtdb.firebaseio.com/quotes.json', {
                    method: 'GET'
                }
            );

            if(!response.ok) {
                throw new Error('Failed to fetch data!');
            }

            const data = await response.json();

            return data;

        }


        try {

            const data = await fetchQuotes();


            for(const key in data) {
                const quoteData = {
                    id: key,
                    ...data[key]
                }
                arrayOfQuotes.push(quoteData);
            }

            console.log(arrayOfQuotes);

            dispatch(quoteActions.replaceQuotes({
                quotes: arrayOfQuotes || [],
                status: 'completed'
            }))

        } catch(error) {

            dispatch(quoteActions.replaceQuotes({
                quotes: arrayOfQuotes || [],
                status: 'completed'
            }))
            console.log(error);
        }

    }

}