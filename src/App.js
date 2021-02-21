import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter';
import Logo from './components/Logo/Logo';
import s from './App.module.css';

const App = () => {
  return (
      
    <div>
      <Logo />
      <div className={s.container}>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </div>
     
  );
};

export default App;
