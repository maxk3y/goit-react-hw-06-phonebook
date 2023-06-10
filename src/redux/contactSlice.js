import { Notification } from 'utils/Notification';

const { createSlice } = require('@reduxjs/toolkit');
const { nanoid } = require('nanoid');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContact: {
      reducer(state, action) {
        const isFindName = state.find(
          contact => contact.name === action.payload.name
        );
        if (isFindName) {
          Notification(action.payload.name);
          return;
        } else state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const id = state.findIndex(contact => contact.id === action.payload);
      state.splice(id, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
