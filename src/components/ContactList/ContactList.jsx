import { Contacts, TotalContacts } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const totalContacts = contacts.length;

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Contacts>
      {visibleContacts.map(({ phone, name, id }) => (
        <ContactItem key={id} phone={phone} name={name} id={id} />
      ))}
      <TotalContacts>Total contacts: {totalContacts}</TotalContacts>
    </Contacts>
  );
};
