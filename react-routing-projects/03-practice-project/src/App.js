import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
            <Redirect to='/quotes'></Redirect>
        </Route>
        <Route path='/quotes' exact>
            <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>

        </Route>
        <Route path='new-quote'>

        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
