import { Route } from 'react-router-dom';
import { Switch } from "react-router-dom";
// Sometimes, you only want to have one active route at the same time. Thats when we use Switch.

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <main>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact> 
          {/* The exact prop. This tells React router, that this should only lead to a match if we have an exact match. */}
            <Products />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
