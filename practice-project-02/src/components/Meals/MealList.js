import React from "react";
import MealItem from "./MealItem";

function MealList(props) {
    return <div>
        {props.meals.map((meal) => (
            <MealItem 
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        ))}
    </div>
}

export default MealList;