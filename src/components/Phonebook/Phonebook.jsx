import { ContactForm } from '../Phonebook/Contacts/ContactForm';
import { ContactsList } from '../Phonebook/Contacts/ContactsList/ContactsList';
import { Filter } from '../Phonebook/Contacts/Filter/Filter';
import { Wrapper } from 'components/Wrapper/wrapper';

export function Phonebook() {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Wrapper>
  );
}
