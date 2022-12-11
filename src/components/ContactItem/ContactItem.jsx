import PropTypes from 'prop-types';
import { Contact, Button } from './ContactItem.styled';
import { removeContact } from '../../redux/slice';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <Contact>
      {name}: {number}
      <Button type="button" id={id} onClick={() => dispatch(removeContact(id))}>
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
