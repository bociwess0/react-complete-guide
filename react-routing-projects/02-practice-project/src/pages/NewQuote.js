import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {

  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
  
    //storing ad history of browsing into wariable

    history.push('/quotes'); 
    //history.replace - do not allows user to go back

    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
