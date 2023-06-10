import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import {
  InputTitle,
  SearchInput,
  AddButton,
  PhonebookAddForm,
} from '../Phonebook.styled';

export function ContactForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    const form = e.target;
    e.preventDefault();
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <PhonebookAddForm onSubmit={handleFormSubmit}>
      <InputTitle>Name</InputTitle>
      <SearchInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <InputTitle>Phone</InputTitle>
      <SearchInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <AddButton>Add contact</AddButton>
    </PhonebookAddForm>
  );
}
