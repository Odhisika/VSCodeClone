import React from 'react';
import styles from './UpdateContent.module.css';

const UpdateContent = ({ content }) => {
  return (
    <div className={styles.content}>
      <div className={styles.securityUpdate}>
        <h3>Security update:</h3>
        <p>
          The following extensions have security updates:{' '}
          <a href="#">ms-python.python</a> and{' '}
          <a href="#">ms-vscode-remote.remote-ssh</a>
        </p>
      </div>

      <div className={styles.updateSection}>
        <h3>Update 1.95.1:</h3>
        <p>The update addresses these <a href="#">issues</a>.</p>
      </div>

      <div className={styles.updateSection}>
        <h3>Update 1.95.2:</h3>
        <p>The update addresses these <a href="#">issues</a>.</p>
      </div>

      <div className={styles.downloads}>
        <h3>Downloads:</h3>
        <p>
          Windows: <a href="#">x64</a> <a href="#">Arm64</a> | 
          Mac: <a href="#">Universal</a> <a href="#">Intel</a> <a href="#">silicon</a> | 
          Linux: <a href="#">deb</a> <a href="#">rpm</a> <a href="#">tarball</a> <a href="#">Arm</a> <a href="#">snap</a>
        </p>
      </div>

      <div className={styles.highlights}>
        <h3>Key Highlights:</h3>
        <ul>
          <li>
            <strong>Copilot Edits</strong> - Iterate quickly on large changes across multiple files
          </li>
          <li>
            <strong>Copilot Chat in Secondary Side Bar</strong> - Keep Copilot Chat open and ready to-go while you work
          </li>
          <li>
            <strong>Multiple GitHub accounts</strong> - Log in to multiple GitHub accounts in VS Code simultaneously
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UpdateContent;