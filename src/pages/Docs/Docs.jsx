import React from 'react';
import styles from './docs.module.css';

const Docs = () => {
  return (
    <div className={styles.docs}>
      <div className={styles.sidebar}>
        <nav>
          <h3>Getting Started</h3>
          <ul>
            <li><a href="#intro">Introduction</a></li>
            <li><a href="#setup">Setup and Installation</a></li>
            <li><a href="#basics">User Interface</a></li>
          </ul>
          <h3>User Guide</h3>
          <ul>
            <li><a href="#basics">Basic Editing</a></li>
            <li><a href="#customization">Customization</a></li>
            <li><a href="#debugging">Debugging</a></li>
          </ul>
        </nav>
      </div>
      <main className={styles.content}>
        <h1>Documentation</h1>
        <section id="intro">
          <h2>Introduction</h2>
          <p>Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.</p>
        </section>
        <section id="setup">
          <h2>Setup and Installation</h2>
          <p>Platform-specific installation instructions for VS Code.</p>
        </section>
        <section id="basics">
          <h2>User Interface</h2>
          <p>VS Code comes with a simple and intuitive layout that maximizes the space provided for the editor while leaving ample room to browse and access the full context of your folder or project.</p>
        </section>
      </main>
    </div>
  );
};

export default Docs;