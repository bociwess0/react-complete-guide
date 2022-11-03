import { useCallback, useEffect, useState } from 'react';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


// const QUOTE_DATA = [
//     {
//         id: 1,
//         title: 'Book',
//         description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
//     },
//     {
//         id: 2,
//         title: 'Magazine',
//         description: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
//     }
// ]

const QuoteList = () => {

    const [quotes, setQuotes] = useState([]);

    const getQuotes = useCallback(async () => {
        try {
            const response = await fetch ('https://react-routing-42d52-default-rtdb.firebaseio.com/quotes.json', {
                    method: 'GET'
                }
            );
      
            if(!response.ok) {
            throw new Error('Failed to fetch data!');
            }
      
            const data = await response.json();
        
            const transformedQuotes = [];
        
            for(const key in data) {
                const quoteObj = {
                    id: key,
                    ...data[key]
                };
            
                transformedQuotes.push(quoteObj);
            }

            setQuotes(transformedQuotes);

        } catch(error) {
            console.log(error);
        }
    })

    
    useEffect(() => {
        getQuotes();
    }, []);
    

    return <div className={classes.list}>
        {quotes.map((quote) => (
            <QuoteItem 
                key = {quote.id}
                id = {quote.id}
                title = {quote.author}
                description = {quote.description}
            />
        ))}
    </div>
}

export default QuoteList;