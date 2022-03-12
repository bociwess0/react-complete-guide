import React, { useState } from "react";
import Header from "./components/MainHeader/Header";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary";
import Modal from "./components/UI/Modal";


const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

function App() {
  const [meals, setMeals] = useState(DUMMY_MEALS);
  console.log(meals);
  return <React.Fragment>
      <Header />
      <MealsSummary />
      <Meals meals={meals} />
      <Modal />
  </React.Fragment>
}

export default App;
