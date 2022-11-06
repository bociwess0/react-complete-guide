import classes from './HighlightedQuote.module.css'

const HighlightedQuote = (props) => {
    return <div className={classes.quoteWrapepr}>
        <h1 className={classes.description}>{props.description}</h1>
        <h2 className={classes.author}>{props.author}</h2>
    </div>
}

export default HighlightedQuote;