import React from "react";
import { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSinner";

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
// Now, this function here which we pass to React lazy, will be executed by React, when this new quote component is needed.
// And that's the key difference.It will not be executed in advance to download the code in advance, but only when it's needed.

const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));


function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered">
          <LoadingSpinner />
        </div>} >
        <Switch>
          <Route path='/' exact>
              <Redirect to='/quotes'></Redirect>
          </Route>
          <Route path='/quotes' exact>
              <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
              <NewQuote />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
