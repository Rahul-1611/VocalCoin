export default function contextReducer(state, action) {
    let transactions = state;
    if (action.type === 'DELETE') {
        transactions = state.filter(t => t.id !== action.payload);
        localStorage.setItem('transactions', JSON.stringify(transactions));
    } else if (action.type === 'ADD') {
        transactions = [action.payload, ...state];
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }
    return transactions;
}