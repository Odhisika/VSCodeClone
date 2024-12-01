import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Download } from 'lucide-react';
import styles from './header.module.css';
import VSCodeLogo from '../Icons/VSCodeLogo';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Link to="/" className={styles.logoLink}>
            <VSCodeLogo />
            <span className={styles.logoText}>Visual Studio Code</span>
          </Link>
          
          <nav className={styles.mainNav}>
            <Link to="/docs">Docs</Link>
            <Link to="/updates">Updates</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/api">API</Link>
            <Link to="/extensions">Extensions</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/copilot">GitHub Copilot</Link>
          </nav>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={20} />
            <input type="text" placeholder="Search" className={styles.searchInput} />
          </div>
          
          <Link to="/download" className={styles.downloadButton}>
            <Download size={20} />
            <span>Download</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;