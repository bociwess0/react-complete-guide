import Card from "../UI/Card";
import MealList from "./MealList";
import "./Meals.css";

function Meals(props) {
    return <div className="meals">
            <Card>
                <MealList meals={props.meals} />
        </Card>
    </div>
}

export default Meals;