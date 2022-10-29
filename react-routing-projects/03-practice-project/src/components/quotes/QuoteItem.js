
import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
    return <div className={classes.quoteItem}>
        <div className={classes.textWrapper}>
            <div className={classes.title}> {props.title} </div>
            <div className={classes.description}> {props.description} </div>
        </div>
        <Link className={classes.btn} to={`/quotes/${props.id}`} >View Fullscreen</Link>
    </div>
}

export default QuoteItem;