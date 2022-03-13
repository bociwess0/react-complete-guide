import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModalHandler = () => {
    setModalOpen(true);
  }

  const closeModalHandler = () => {
    setModalOpen(false);
  }

  return (
    <CartProvider>
      {modalOpen && <Cart onCloseModal={closeModalHandler}/>}
      <Header onShowModal={showModalHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
