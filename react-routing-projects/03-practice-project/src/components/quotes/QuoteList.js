import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


const QUOTE_DATA = [
    {
        id: 1,
        title: 'Book',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        id: 2,
        title: 'Magazine',
        description: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
    }
]

const QuoteList = () => {

    const quotes = QUOTE_DATA;

    return <div className={classes.list}>
        {quotes.map((quote) => (
            <QuoteItem 
                key = {quote.id}
                id = {quote.id}
                title = {quote.title}
                description = {quote.description}
            />
        ))}
    </div>
}

export default QuoteList;