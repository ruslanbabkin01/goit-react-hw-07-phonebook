import { Contacts, TotalContacts } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const totalContacts = contacts.length;

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Contacts>
      {visibleContacts.map(({ number, name, id }) => (
        <ContactItem key={id} number={number} name={name} id={id} />
      ))}
      <TotalContacts>Total contacts: {totalContacts}</TotalContacts>
    </Contacts>
  );
};
