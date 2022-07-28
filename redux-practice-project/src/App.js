import './App.css';
import Layout from './components/Layout/Layout';
import {Fragment} from 'react'
import {useSelector} from 'react-redux';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';

function App() {

  const toggleCart = useSelector(state => state.ui.cartVisible);

  return <Fragment>
    <Layout>
      {toggleCart && <Cart />}
      <Products />
    </Layout>
  </Fragment>
}

export default App;
