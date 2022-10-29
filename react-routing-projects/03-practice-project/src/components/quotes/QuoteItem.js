
import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
    return <div className={classes.quoteItem}>
        <div className={classes.text-wrapper}>
            <div className={classes.title}> {props.title} </div>
            <div className={classes.description}> {props.description} </div>
        </div>
        <button className={classes.button}>View Fullscreen</button>
    </div>
}

export default QuoteItem;