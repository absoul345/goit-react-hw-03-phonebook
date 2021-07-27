import React from 'react';
import Filter from './filter/Filter';
import ContactsItem from './contactsItem/ContactsItem';

const ContactsList = ({ contacts, filter, changeFilter, onDeleteContact }) => (
  <>
    <Filter filter={filter} changeFilter={changeFilter} />
    <ul>
      {contacts.map(contact => (
        <ContactsItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  </>
);

export default ContactsList;
