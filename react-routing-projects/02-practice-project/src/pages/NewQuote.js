import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {

  const {sendRequest, status} = useHttp(addQuote);
  

  const history = useHistory();

  useEffect(() => {

    if(status === 'completed') {
      history.push('/quotes');
    }

  }, [status, history])


  const addQuoteHandler = (quoteData) => {
    

    sendRequest(quoteData);
    //storing ad history of browsing into wariable

    //history.replace - do not allows user to go back

    console.log(quoteData);
  };

  return <QuoteForm isLoading = {status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
