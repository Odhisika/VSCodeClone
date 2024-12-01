import React from 'react';
import styles from './API.module.css';

const API = () => {
  return (
    <div className={styles.api}>
      <div className={styles.sidebar}>
        <nav>
          <h3>Getting Started</h3>
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#setup">Extension Setup</a></li>
            <li><a href="#first-extension">Your First Extension</a></li>
          </ul>
          <h3>References</h3>
          <ul>
            <li><a href="#vscode-api">VS Code API</a></li>
            <li><a href="#contribution-points">Contribution Points</a></li>
            <li><a href="#activation-events">Activation Events</a></li>
          </ul>
        </nav>
      </div>
      <main className={styles.content}>
        <section className={styles.hero}>
          <h1>VS Code API</h1>
          <p>Build powerful extensions that enhance Visual Studio Code.</p>
        </section>
        
        <section id="overview" className={styles.section}>
          <h2>Overview</h2>
          <p>Visual Studio Code is built with extensibility in mind. From the UI to the editing experience, almost every part of VS Code can be customized and enhanced through the Extension API.</p>
          
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>Extension Capabilities</h3>
              <p>Extend VS Code with new features using over 100+ Extension API points.</p>
            </div>
            <div className={styles.feature}>
              <h3>Language Support</h3>
              <p>Add support for new programming languages and file types.</p>
            </div>
            <div className={styles.feature}>
              <h3>Debugger Extensions</h3>
              <p>Connect VS Code's debugging UI to a specific debugger or runtime.</p>
            </div>
          </div>
        </section>

        <section id="setup" className={styles.section}>
          <h2>Extension Setup</h2>
          <div className={styles.codeBlock}>
            <pre>
              <code>
                npm create vscode-extension my-extension
              </code>
            </pre>
          </div>
          <p>Get started quickly with our Yeoman generator for VS Code extensions.</p>
        </section>
      </main>
    </div>
  );
};

export default API;