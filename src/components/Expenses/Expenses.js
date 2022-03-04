import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
import Card from "../UI/Card";

function Expenses(props) {
    const [selectedItem, setSelectedItem] = useState('2020');
    const saveSelectedDataHandler = selectedYear => {
        setSelectedItem(selectedYear);
    }
    console.log(selectedItem);

    return <Card className="expenses">
            <ExpensesFilter selected={selectedItem} onSaveSelectedDataHandler={saveSelectedDataHandler} />
            {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
        </Card>
}

export default Expenses;