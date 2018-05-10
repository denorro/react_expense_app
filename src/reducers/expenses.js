
const defaultState = {
    expenseList: JSON.parse(localStorage.getItem('@expenseList')),
    currentSelectedExpense: '',
    goodMessages: [],
    badMessages: []
}

export default ( state = defaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            try{
                const newList = [...state.expenseList, action.expense];
                localStorage.setItem('@expenseList', JSON.stringify(newList));
                console.log(JSON.parse(localStorage.getItem('@expenseList')));
            }
            catch(error){
                state.badMessages.push('Error saving issue to storage!');
            }
            return {
                ...state,
                expenseList:[...state.expenseList, action.expense]
            }
        case 'REMOVE_EXPENSE':
            console.log(state);
            const newList = state.expenseList.filter(expense => expense.id !== action.id);
            localStorage.setItem('@expenseList', JSON.stringify(newList));
            return {
                ...state,
                expenseList: [...newList]
            }
        case 'EDIT_EXPENSE':
            return state.map(expense => {
               if(expense.id === action.id){
                   return {
                       ...expense,
                       ...action.updates
                   }
               }
               else {
                   return expense
               }
            });
        default:
            return state;
    }
}
