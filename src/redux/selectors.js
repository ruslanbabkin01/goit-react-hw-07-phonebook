import { sortContacts } from 'utils/sortContacts';

import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filterValue;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    console.log('aa');
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );

    return sortContacts(visibleContacts);
  }
);

// export const selectVisibleContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };
