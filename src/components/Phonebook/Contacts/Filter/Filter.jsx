import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { SearchInput } from 'components/Phonebook/Phonebook.styled';
import { ContactsFieldWrapper } from './FilterWrapper';
import { InputTitleContacts } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <ContactsFieldWrapper>
      <InputTitleContacts>Find contacts by name</InputTitleContacts>
      <SearchInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
    </ContactsFieldWrapper>
  );
};
