import React from "react";
import Filter from "./filter/Filter";
import ContactsItem from "./contactsItem/ContactsItem";

const ContactsList = ({ contacts, filter, changeFilter, onDeleteContact }) => (
  <>
    <Filter filter={filter} changeFilter={changeFilter} />
    <ContactsItem contacts={contacts} onDeleteContact={onDeleteContact} />
  </>
);

export default ContactsList;
