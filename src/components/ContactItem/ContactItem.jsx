import PropTypes from 'prop-types';
import { Contact, Button } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import { updateDate } from '../../utils/formatDate';

export const ContactItem = ({ name, phone, id, date }) => {
  const dispatch = useDispatch();
  const newDate = updateDate(date);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    Notify.info(`Contact ${name} deleted`);
  };

  return (
    <Contact>
      {newDate} <br />
      {name} : {phone}
      <Button type="button" id={id} onClick={handleDelete}>
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  phone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
