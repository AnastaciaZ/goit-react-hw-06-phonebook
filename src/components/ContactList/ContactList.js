import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/actions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from '../Button/Button';
import s from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDelete}) => {
    return (
        <TransitionGroup component="ul">
            {contacts.map(({ id, name, number }) => (
                <CSSTransition key={id} timeout={250} classNames={s}>
                    <li className={s.contactList} /*key={id}*/ id={ id}>
                        <p className={s.contactText}>{name}</p>
                        <p className={s.contactText}>{number}</p>
                        <Button label="Delete" onClick={() => onDelete(id)} />
                    </li>
                </CSSTransition>
            ))}
            </TransitionGroup>
    );
};
const getFilterContacts = (allContacts, filter ) => {
    return allContacts.filter(({name}) =>
        name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

const mapStateToProps = state => {
    const { filter, items } = state.contacts;
    const filterContacts= getFilterContacts(items, filter)
    
    return {
        contacts: filterContacts,
    }
};

const mapDispatchToProps = dispatch => ({
    onDelete: (id) => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
