import uuid from 'uuid';

export const addExpense = ({name='', category='General Category', description = '',notes = '',cost = 0, date = Date.now(), created = Date.now(), updated = Date.now()} = {}) => ({
   type: 'ADD_EXPENSE',
   expense: {
       id: uuid(),
       name,
       category,
       description,
       notes,
       cost,
       created,
       updated,
       date
   }
});

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});