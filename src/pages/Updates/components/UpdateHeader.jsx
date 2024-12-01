import React from 'react';
import styles from './UpdateHeader.module.css';

const UpdateHeader = ({ version, date }) => {
  return (
    <div className={styles.header}>
      <h1>{date} (version {version})</h1>
      <button className={styles.editButton}>Edit</button>
    </div>
  );
};

export default UpdateHeader;