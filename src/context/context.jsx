import React, { useReducer, createContext } from "react";
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ "amount": 200, "category": "Travel", "type": "Expense", "date": "2023-09-09", "id": "853c04c3-bbe7-4c98-a51e-1cdadb052fcc" }, { "amount": 150, "category": "Bills", "type": "Expense", "date": "2023-09-02", "id": "12545d74-0a0e-4b89-a8ab-6f29093f29eb" }, { "amount": 500, "category": "Salary", "type": "Income", "date": "2023-09-01", "id": "80ac8ad7-a19f-450a-995e-1b165f32c8d2" }, { "amount": 250, "category": "Extra income", "type": "Income", "date": "2023-09-08", "id": "05d8c647-8b57-45b2-b48c-15526ac23009" }];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creator
    const deleteTransaction = id => dispatch({ type: 'DELETE', payload: id });
    const addTransaction = transaction => dispatch({ type: 'ADD', payload: transaction });

    const balance = transactions.reduce((total, currVal) => (currVal.type === 'Expense' ? total - currVal.amount : total + currVal.amount), 0);

    return (
        <ExpenseTrackerContext.Provider value={{ deleteTransaction, addTransaction, transactions, balance }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}