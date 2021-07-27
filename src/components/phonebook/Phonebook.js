import React, { Component } from 'react';
import SectionAddContacts from '../section/SectionAddContacts';
import SectionList from '../section/SectionList';
import AddContacts from '../addContacts/AddContacts';
import ContactsList from '../contactsList/ContactsList';
import { v4 as uuidv4 } from 'uuid';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContacts = (name, number) => {
    if (
      this.state.contacts.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number,
      )
    ) {
      alert(`${name} or ${number} is already in contacts`);
      return;
    }
    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilterContacts();
    return (
      <>
        <SectionAddContacts title="Phonebook">
          <AddContacts onSubmit={this.addContacts} />
        </SectionAddContacts>
        <SectionList title="Contacts">
          <ContactsList
            contacts={filteredContacts}
            filter={filter}
            changeFilter={this.changeFilter}
            onDeleteContact={this.onDeleteContact}
          />
        </SectionList>
      </>
    );
  }
}

export default Phonebook;
