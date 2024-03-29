import './App.css';
import Layout from './components/Layout/Layout';
import {Fragment, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import { fetchCartData, sendCartData } from './store/cart-actions';
import Notification from './components/UI/Notification';

function App() {

  const toggleCart = useSelector(state => state.ui.cartVisible);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();
  
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  },[dispatch])

  useEffect(() => {
    if(cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch])

  
  return <Fragment>
    
    {notification && (
      <Notification 
        status = {notification.status}
        message = {notification.message}
      />
    )}
    <Layout>
      {toggleCart && <Cart />}
      <Products />
    </Layout>
  </Fragment>
}

export default App;
