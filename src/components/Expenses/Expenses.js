import React, { useState } from "react"; 
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [selectedItem, setSelectedItem] = useState('2020');

    const saveSelectedDataHandler = selectedYear => {
        setSelectedItem(selectedYear);
    }
    
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedItem;
    });

    let expensesContent = <p>No expenses found.</p>;


    //we use key to ensure that our item is added at the beggining of the list
    return <Card className="expenses">
            <ExpensesFilter selected={selectedItem} onSaveSelectedDataHandler={saveSelectedDataHandler} />
            <ExpensesList items={filteredExpenses} />
    </Card>
}

export default Expenses;