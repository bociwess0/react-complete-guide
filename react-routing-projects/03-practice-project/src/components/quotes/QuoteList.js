import {  useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuotes } from '../../store/quote-actions';
import { quoteActions } from '../../store/quote-slice';
import LoadingSpinner from '../UI/LoadingSinner';
import NoQuotesFound from './NoQuotesFound';
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
    const [isSortingAscending, setIsSortingAscending] = useState(true);

    const sortQuotes = () => {

        dispatch(quoteActions.setStatus({
            status: 'pending'
        }));

        setTimeout(() => {
            dispatch(quoteActions.sortQuotes({
                quotes: quotes,
                ascending: isSortingAscending
            }));

            dispatch(quoteActions.setStatus({
                status: 'completed'
            }));

            setIsSortingAscending(!isSortingAscending);

        }, 200)

    };


    
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

    if(quotes.length === 0) {
        return <NoQuotesFound />
    }

    
    return <div className={classes.list}>
        <div className={classes.sorting}>
                <button onClick={sortQuotes}>
                    Sort {isSortingAscending ? 'Ascending' : 'Descending'}
                </button>
            </div>
        { quotes.length > 0 && quotes.map((quote, index) => (
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