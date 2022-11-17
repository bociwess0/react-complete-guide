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
                    quoteId: quoteData.quoteId,
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

export const deleteQuote = (deleteTarget) => {
    return async (dispatch) => {

        dispatch(quoteActions.setStatus({
            status: 'pending'
        }))

        
        const sendRequest = async () => {

            const response = await fetch (`${DATABASE_LINK}/quotes/${deleteTarget.id}.json`, {
                method: 'DELETE',
            })
            
            if(!response.ok) {
                throw new Error('Failed to update data!');
            }

            if (response.status >= 400 && response.status < 600) {
                throw new Error("Bad response from server");
            }

        }

        try {

            await sendRequest();

            dispatch(quoteActions.deleteQuoteItem({
                id: deleteTarget.id
            }));

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

export const getSignleQuote = (quoteId) => {
    return async (dispatch) => {
        const sendRequest = async () => {

            const response = await fetch(`${DATABASE_LINK}/quotes/${quoteId}.json`);

            if(!response.ok) {
                throw new Error ('Fialed to fetch data!');
            }

            const data = response.json();

            return data;
        }

        try {

            const quote = await sendRequest();

            const quoteData = {
                id: quoteId,
                ...quote
            }

            dispatch(quoteActions.updateSpecificQuote(quoteData));

        } catch(error) {
            console.log(error);
        }

    }
}

export const fetchComments = (quoteId) => {
    
    return async (dispatch) => {

        const arrayOfComments = [];

        dispatch(quoteActions.setStatus({
            status: 'pending'
        }));

        const sendRequest = async () => {
            const response = await fetch(`${DATABASE_LINK}/comments.json`);

            if(!response.ok) {
                throw new Error('Failed to fetch commnets!');
            }

            const data = await response.json();


            return data;
        }

        try {

            const data = await sendRequest();
            
            for(const key in data) {
                if(quoteId === data[key].quoteId) {
                    const commentData = {
                        id: key,
                        ...data[key]
                    }
                    arrayOfComments.push(commentData);
                }
            }

            dispatch(quoteActions.replaceComments({
                comments: arrayOfComments || []
            }))

            dispatch(quoteActions.setStatus({
                status: 'completed'
            }));
            

        } catch(error) {
            console.log(error);

            dispatch(quoteActions.setStatus({
                status: 'completed'
            }));
        }
    }
}


export const addComment = (author, commentText, quoteId) => {
    return async (dispatch) => {

        dispatch(quoteActions.setStatus({
            status: 'pending'
        }));


        const sendRequest = async () => {
            const response = await fetch(`${DATABASE_LINK}/comments.json`, {
                method: 'POST',
                body: JSON.stringify({
                    quoteId: quoteId,
                    author: author,
                    text: commentText
                })
            })

            if(!response.ok) {
                throw new Error('Failed to send data!');
            }
            
            const data = await response.json();

            return data;
        }

        try {

            await sendRequest();

            dispatch(quoteActions.addCommentItem({
                quoteId: quoteId,
                author: author,
                text: commentText
            }));

            dispatch(quoteActions.setStatus({
                status: 'completed'
            }));
            
        } catch(error) {
            console.log(error);

            dispatch(quoteActions.setStatus({
                status: 'completed'
            }));
        }
    }
}