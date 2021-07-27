import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddContacts.module.css';

export class AddContacts extends Component {
  state = {
    id: uuidv4(),
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label} htmlFor={uuidv4()}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              id={uuidv4()}
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label className={styles.label} htmlFor={uuidv4()}>
            Number
            <input
              className={styles.input}
              type="tel"
              name="number"
              id={uuidv4()}
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button className={styles.btn} type="submit">
            Add contacts
          </button>
        </form>
      </div>
    );
  }
}

export default AddContacts;
