import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';
 
const items = createReducer([], {
    [actions.addContact]: (state, action) => [action.payload, ...state],
    [actions.deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload)
});

const filter = createReducer('', {
    [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
    items,
    filter
});