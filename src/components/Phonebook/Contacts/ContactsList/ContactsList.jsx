import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from './ContactsItem/ContactsItem';
import { deleteContact } from 'redux/contactSlice';
import PropTypes from 'prop-types';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  return (
    <ul>
      {contacts &&
        contacts.map(contact => {
          return contact.name.toLowerCase().includes(filter.toLowerCase()) ? (
            <ContactItem key={contact.id}>
              {contact.name}: {contact.number}
              <button
                onClick={handleDelete}
                style={{ marginLeft: 10 }}
                id={contact.id}
              >
                Delete
              </button>
            </ContactItem>
          ) : null;
        })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  filter: PropTypes.string,
  handleDelete: PropTypes.func,
};
