import './App.css';
import Layout from './components/Layout/Layout';
import {Fragment, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import { sendCartData } from './store/cart-actions';

function App() {

  const toggleCart = useSelector(state => state.ui.cartVisible);
  const dispatch = useDispatch();
  
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(sendCartData(cart));
  }, [cart, dispatch])

  

  return <Fragment>
    <Layout>
      {toggleCart && <Cart />}
      <Products />
    </Layout>
  </Fragment>
}

export default App;
