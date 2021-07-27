import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, changeFilter }) => {
  return (
    <>
      <label className={styles.filter}>
        Find contacts by name
        <input type="text" value={filter} onChange={changeFilter}></input>
      </label>
    </>
  );
};

Filter.prototype = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
