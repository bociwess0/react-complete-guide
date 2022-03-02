import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, //on alredy stored data, im adding an radnom id
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    
    //pointed edit is passed to ExpenseForm
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
    </div>
};

export default NewExpense;