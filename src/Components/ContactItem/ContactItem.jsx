import { useDeleteContactMutation } from 'redux/contactsApi';
import { toast } from 'react-toastify';
import { ContactItem, DeleteButton, Name, Number } from './ContactItem.styled';

export const Contact = ({ contact }) => {
  const { name, phone, id } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDelete = id => {
    deleteContact(id);
    toast.info(`Contact is deleted`);
  };

  return (
    <ContactItem key={id}>
      <Name>{name}:</Name>
      <Number>{phone}</Number>
      <DeleteButton type="button" id={id} onClick={() => handleDelete(id)}>
        {isLoading ? 'Processing...' : 'Delete'}
      </DeleteButton>
    </ContactItem>
  );
};
