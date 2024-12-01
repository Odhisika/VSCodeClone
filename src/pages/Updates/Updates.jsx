import React, { useState } from 'react';
import styles from './Updates.module.css';
import UpdateHeader from './components/UpdateHeader';
import UpdateSidebar from './components/UpdateSidebar';
import UpdateContent from './components/UpdateContent';

const Updates = () => {
  const [selectedMonth, setSelectedMonth] = useState('october-2024');

  const updates = [
    { id: 'october-2024', month: 'October 2024' },
    { id: 'september-2024', month: 'September 2024' },
    { id: 'august-2024', month: 'August 2024' },
    { id: 'july-2024', month: 'July 2024' },
    { id: 'june-2024', month: 'June 2024' },
    { id: 'may-2024', month: 'May 2024' }
  ];

  return (
    <div className={styles.updates}>
      <div className={styles.banner}>
        <a href="#">Version 1.95</a> is now available! Read about the new features and fixes from October.
      </div>
      
      <div className={styles.container}>
        <UpdateSidebar
          updates={updates}
          selectedMonth={selectedMonth}
          onSelectMonth={setSelectedMonth}
        />
        
        <main className={styles.main}>
          <UpdateHeader version="1.95" date="October 2024" />
          <UpdateContent />
        </main>

        <aside className={styles.rightSidebar}>
          <h3>IN THIS UPDATE</h3>
          <nav>
            <a href="#github-copilot">GitHub Copilot</a>
            <a href="#workbench">Workbench</a>
            <a href="#editor">Editor</a>
            <a href="#vscode-web">VS Code for the Web</a>
            <a href="#extensions">Contributions to extensions</a>
            <a href="#extension-authoring">Extension Authoring</a>
            <a href="#proposed-apis">Proposed APIs</a>
            <a href="#engineering">Engineering</a>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default Updates;

