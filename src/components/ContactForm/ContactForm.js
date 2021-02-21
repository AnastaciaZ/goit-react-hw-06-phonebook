import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/actions';
import shortid from 'shortid';
import Button from '../Button/Button';
import AlertMessage from '../Alert/Alert';
import styleAlert from '../Alert/Alert.module.css';
import s from '../ContactForm/ContactForm.module.css';

class ContactForm extends React.Component { 
    state = {
        name: '',
        number: '',
        error: false,
        message: '',
    };
    nameInputId = shortid.generate();

    handleChange = event => {
    const { name,value } = event.currentTarget;
    this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.name === '') {
     this.setState({ error: true, message: 'Please enter contact name' }) || setTimeout(() => {
        this.setState({ error: false });
      }, 2000)

      return;
        }
         if (this.state.number === '') { 
      
      this.setState({ error: true, message: 'Please enter contact number' }) || setTimeout(() => {
        this.setState({ error: false });
      }, 2000)

      return;
        }
        
       if (this.props.items.some((item) => item.name === this.state.name)){ 
            this.setState({ error: true, message: `${this.state.name} is already in contacts!` }) || setTimeout(() => {
        this.setState({ error: false });
            }, 2000)
            return;
        }
    
        this.props.onSubmit(this.state.name, this.state.number);
        this.reset();
    };
    reset = () => { 
        this.setState({name: '', number: ''});
        };

    render() { 
        const {name, number, error, message } = this.state;
        return (
            <form className={ s.contactsForm} onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId} className={ s.labelForm}>  
                    Name
           <br />
                    <input
                    className={ s.contactInput}
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                        id={this.nameInputId} />
                </label>
                <br/>
                <label className={ s.labelForm}>
                    Number
                     <br />
            <input
                    className={ s.contactInput}
                    type="text"
                    name="number"
                    value={number}
                    onChange={this.handleChange} />
                </label>
                <br />
                <Button label="Add contact" type="submit" />
                
                <CSSTransition
                    in={error}
                    timeout={250}
                    classNames={styleAlert}
                    unmountOnExit>
                    <AlertMessage message={ message}/>
                </CSSTransition>

            </form>   
        );
    };
};

const mapStateToProps = state => ({
    items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
    onSubmit: ( name, number ) => dispatch(contactsActions.addContact( name, number )),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);