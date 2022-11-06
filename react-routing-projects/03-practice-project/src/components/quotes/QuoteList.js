import {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuotes } from '../../store/quote-actions';
import LoadingSpinner from '../UI/LoadingSinner';
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


    const dispatch = useDispatch();
    const quotes = useSelector(state => state.quoteReducer.quotes);
    const status = useSelector(state => state.quoteReducer.status);
    
    useEffect(() => {
        
        dispatch(fetchQuotes());

    }, [dispatch]);


    if (status === 'pending') {
        return (
          <div className='centered'>
            <LoadingSpinner />
          </div>
        );
    }

    
    return <div className={classes.list}>
        { quotes.map((quote, index) => (
            <QuoteItem 
                key = {index}
                id = {quote.id}
                title = {quote.author}
                description = {quote.description}
            />
        ))}
    </div>
}

export default QuoteList;