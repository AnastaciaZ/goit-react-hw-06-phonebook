import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/actions';
import s from '../Filter/Filter.module.css';

const Filter = ({ items, name, onChangeFilter}) =>(

     <CSSTransition
            in={items.length >= 2}
            timeout={250}
            classNames={s}
         unmountOnExit>
        <div className={s.container}>
            <label className={ s.labelFilter}>Find contacts by name
             <br/>
             <input className={s.filterInput}
                 type="text"
                 value={name}
                 onChange={onChangeFilter} />
            </label>    
         </div>
        </CSSTransition>
    
);

const mapStateToProps = state => ({
    name: state.contacts.filter,
    items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
   onChangeFilter: e=>dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);