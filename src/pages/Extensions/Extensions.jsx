import React from 'react';
import { Search } from 'lucide-react';
import styles from './Extensions.module.css';

const Extensions = () => {
  const featuredExtensions = [
    {
      title: "Python",
      publisher: "Microsoft",
      description: "IntelliSense, linting, debugging, code formatting, and more for Python",
      downloads: "48.2M",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&w=100&q=80"
    },
    {
      title: "ESLint",
      publisher: "Microsoft",
      description: "Integrates ESLint JavaScript into VS Code",
      downloads: "29.1M",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1542831371-32f555c86880?auto=format&fit=crop&w=100&q=80"
    },
    {
      title: "GitLens",
      publisher: "GitKraken",
      description: "Supercharge Git within VS Code",
      downloads: "22.8M",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <div className={styles.extensions}>
      <div className={styles.header}>
        <h1>Extensions for Visual Studio Code</h1>
        <div className={styles.searchBar}>
          <Search size={20} />
          <input type="text" placeholder="Search extensions in Marketplace" />
        </div>
      </div>

      <div className={styles.categories}>
        <button className={styles.active}>Featured</button>
        <button>Most Popular</button>
        <button>Recently Added</button>
        <button>Trending</button>
      </div>

      <div className={styles.extensionGrid}>
        {featuredExtensions.map((extension, index) => (
          <div key={index} className={styles.extensionCard}>
            <div className={styles.extensionHeader}>
              <img src={extension.image} alt={extension.title} />
              <div>
                <h3>{extension.title}</h3>
                <p className={styles.publisher}>{extension.publisher}</p>
              </div>
            </div>
            <p className={styles.description}>{extension.description}</p>
            <div className={styles.extensionFooter}>
              <span className={styles.downloads}>{extension.downloads} downloads</span>
              <span className={styles.rating}>★ {extension.rating}</span>
            </div>
            <button className={styles.installButton}>Install</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extensions;