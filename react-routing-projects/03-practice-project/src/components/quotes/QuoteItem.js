
import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteQuote, fetchQuotes } from '../../store/quote-actions';


const QuoteItem = (props) => {

    const dispatch = useDispatch();

    const deleteQuoteHandler = () => {
        
        dispatch(deleteQuote({
            id: props.id
        }))
        
    }

    return <div className={classes.quoteItem}>
        <div className={classes.textWrapper}>
            <div className={classes.title}> {props.title} </div>
            <div className={classes.description}> {props.description} </div>
        </div>
        <div className={classes.buttonWrapper}>
            <Link className={classes.btn} to={`/quotes/${props.id}`} >View Fullscreen</Link>
            <button className={classes.btn} onClick={deleteQuoteHandler}>Delete Quote </button>
        </div>
    </div>
}

export default QuoteItem;