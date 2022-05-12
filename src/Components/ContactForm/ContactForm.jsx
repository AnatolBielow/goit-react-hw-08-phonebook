import React from 'react';
import { ButtonSubmit, FormLabel, Icon } from './ContactForm.styled';
import { AiOutlineUserAdd, AiOutlinePhone } from 'react-icons/ai';
import { formattedNumber } from 'Helpers/formattedNumber';
import { toast } from 'react-toastify';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsApi';

export const ContactForm = () => {
  const { data } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    const newContact = {
      name,
      phone: formattedNumber(number),
    };
    for (let i = 0; i < data.length; i++) {
      const normalizedName = data[i].name.toLowerCase();
      const oldNumber = data[i].phone;

      if (newContact.name.toLowerCase() === normalizedName) {
        return toast.error(`Sorry, but ${name} is already in contacts!`);
      }
      if (newContact.phone === oldNumber) {
        return toast.error(`Sorry, but ${number} belongs to ${data[i].name}!`);
      }
    }
    try {
      createContact(newContact);
      toast.success(`Contact ${name} is added to Phoonebook!`);
    } catch (error) {
      console.log(error);
    }
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">Name</FormLabel>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Icon>
        <AiOutlineUserAdd />
      </Icon>

      <FormLabel htmlFor="number">Number</FormLabel>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Icon>
        <AiOutlinePhone />
      </Icon>
      <ButtonSubmit type="submit">Submit</ButtonSubmit>
    </form>
  );
};
