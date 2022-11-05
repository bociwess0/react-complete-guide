import { useState } from "react"
import { quoteActions } from "./quote-slice";

const DATABASE_LINK = 'https://react-routing-42d52-default-rtdb.firebaseio.com';

export const fetchQuotes = () => {

    return async (dispatch) => {

        dispatch(quoteActions.setStatus({
            status: 'pending'
        }))

        const arrayOfQuotes = [];

        const fetchQuotes = async () => {
            
            const response = await fetch (`${DATABASE_LINK}/quotes.json`, {
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

            dispatch(quoteActions.replaceQuotes({
                quotes: arrayOfQuotes || []
            }))

            dispatch(quoteActions.setStatus({
                status: 'completed'
            }))
            
        } catch(error) {

            dispatch(quoteActions.setStatus({
                status: 'completed'
            }))

            console.log(error);
        }

    }

}

export const addQuote = (quoteData) => {
    return async (dispatch) => {

        dispatch(quoteActions.setStatus({
            status: 'pending'
        }))

        const sendRequest = async () => {
            const response = await fetch(`${DATABASE_LINK}/quotes.json`, {
                method: 'POST',
                body: JSON.stringify({
                    id: quoteData.id,
                    author: quoteData.author,
                    description: quoteData.description
                })
            });

            if(!response.ok) {
                throw new Error('Failed to send data!')
            }

            const data = await response.json();

            return data;
        }

        try {
            
            await sendRequest();

            dispatch(quoteActions.addQuoteItem( {
                id: quoteData.id,
                author: quoteData.author,
                description: quoteData.description
            }))

            dispatch(quoteActions.setStatus({
                status: 'completed'
            }))

        } catch(error) {

            
            console.log(error);
        }

    }
}