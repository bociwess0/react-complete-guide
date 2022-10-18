import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
//Where useHistory gives us access to the history object, an object that allows us to change and manage the URL,
//useLocation gives us access to a location object which has information about the currently loaded page,
//about the currently loaded URL.

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {

  const history = useHistory();
  const location = useLocation();


  const queryParams = new URLSearchParams(location.search); //gets our link
  const isSortingAcending = queryParams.get('sort') === 'asc';
  //get give us a value of a stored key

  const sortMethod = isSortingAcending ? 'Descending' : 'Ascending';

  
  const sortedQuotes = sortQuotes(props.quotes, isSortingAcending);

  const changeSortingHandler = () => {
    
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAcending ? 'desc' : 'asc')}`
    })
    //key: sort, value: asc
  }

  return (
    <Fragment>
      <ul className={classes.list}>
        <div className={classes.sorting}>
          <button onClick={changeSortingHandler} >Sort {sortMethod}</button>
        </div>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
