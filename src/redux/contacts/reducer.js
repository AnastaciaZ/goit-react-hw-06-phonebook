import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const initialState = {
    contacts: {
        items: [],
        filter: ''
    }
}
 
const items = createReducer(initialState.contacts.items, {
    [actions.addContact]: (state, action) => [action.payload, ...state],
    [actions.deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload)
});

const filter = createReducer(initialState.contacts.filter, {
    [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
    items,
    filter
});