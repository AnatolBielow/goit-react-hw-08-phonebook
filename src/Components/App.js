import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Phonebook,
  PhonebookContainer,
  Title,
  TitleContacts,
} from './Base.styled';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { useFetchContactsQuery } from 'redux/contactsApi';

export default function App() {
  const { data } = useFetchContactsQuery();

  return (
    <Phonebook>
      <ToastContainer />
      <PhonebookContainer>
        <Title>Phonebook</Title>
        <ContactForm />
      </PhonebookContainer>
      <PhonebookContainer>
        <TitleContacts>Contacts</TitleContacts>
        {data && data.length > 1 && <Filter />}
        {data ? <ContactList /> : <div>This is no contacts in Phonebook</div>}
      </PhonebookContainer>
    </Phonebook>
  );
}
