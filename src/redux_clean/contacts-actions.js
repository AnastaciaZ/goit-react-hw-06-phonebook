import shortid from 'shortid';
import types from './contacts-types';

const addContact = (name, number) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name,
        number,
    },
});

const deleteContact = contactId => ({
    type: types.DELETE,
    payload: contactId,
});

const changeFilter = filter => ({
    type: types.CHANGE_FILTER,
    payload: filter,

});

const contactsActions = { addContact, deleteContact, changeFilter };

export default contactsActions;
