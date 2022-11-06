import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { getSignleQuote } from "../store/quote-actions";
import { Fragment } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
    
    const { quoteId } = useParams();
    const dispatch = useDispatch();
    const quote = useSelector((state) => state.quoteReducer.singleQuote);
    // const quotes = useSelector((state) => state.quoteReducer.quotes);

    useEffect(() => {
       dispatch(getSignleQuote(quoteId));
    }, [dispatch]);

    return <Fragment>
        <HighlightedQuote author={quote.author} description={quote.description} />
    </Fragment>
}

export default QuoteDetail;