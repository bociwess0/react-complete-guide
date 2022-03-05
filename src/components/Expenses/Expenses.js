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
    
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedItem;
    });


    //we use key to ensure that our item is added at the beggining of the list
    return <Card className="expenses">
            <ExpensesFilter selected={selectedItem} onSaveSelectedDataHandler={saveSelectedDataHandler} />
            {filteredExpenses.map(
                expense => 
                    <ExpenseItem
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                />)}
        </Card>
}

export default Expenses;