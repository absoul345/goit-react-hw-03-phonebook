import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ContactsItem.module.css";
import PropTypes from "prop-types";

const ContactsItem = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li className={styles.contact__Item} key={uuidv4()}>
          <p>
            {name}:{number}
            <button
              className={styles.contacts__ItemBtn}
              onClick={() => onDeleteContact(id)}
            >
              {" "}
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

ContactsItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.bool.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
