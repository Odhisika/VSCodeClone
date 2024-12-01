import React from 'react';
import styles from './UpdateSidebar.module.css';

const UpdateSidebar = ({ updates, selectedMonth, onSelectMonth }) => {
  return (
    <div className={styles.sidebar}>
      <h2>UPDATES</h2>
      <nav>
        {updates.map((update) => (
          <a
            key={update.id}
            href={`#${update.id}`}
            className={`${styles.link} ${selectedMonth === update.id ? styles.active : ''}`}
            onClick={() => onSelectMonth(update.id)}
          >
            {update.month}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default UpdateSidebar;