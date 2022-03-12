import React, { useContext} from "react";
import OrderContext from "./components/Context/orderContext";
import Header from "./components/MainHeader/Header";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary";



function App() {
  const ctx = useContext(OrderContext);
  return <React.Fragment>
      <Header />
      <MealsSummary />
      <Meals meals={ctx.meals} />
  </React.Fragment>
}

export default App;
