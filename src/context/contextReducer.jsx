export default function contextReducer(state, action) {
    let transactions = state;
    if (action.type === 'DELETE') {
        transactions = state.filter(t => t.id !== action.payload);
    } else if (action.type === 'ADD') {
        transactions = [action.payload, ...state];
    }
    return transactions;
}