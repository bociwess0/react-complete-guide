import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import AllQuotes from './components/pages/AllQuotes';
import QuoteDetail from './components/pages/QuoteDetail';
import NewQuote from './components/pages/NewQuote';

function App() {
  return (
    <div>
        <Switch>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-route">
            <NewQuote />
          </Route>

        </Switch>
    </div>
  );
}

export default App;
