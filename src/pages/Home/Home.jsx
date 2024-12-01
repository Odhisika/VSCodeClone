import React from 'react';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Top Notice Banner */}
      <div className={styles.topNotice}>
        <p>
          <strong>Version 1.95</strong> is now available! Read about the new features and fixes from October.{' '}
          <a href="#">Learn more</a>
        </p>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Code faster with AI</h1>
          <p>
            Visual Studio Code with GitHub Copilot supercharges your code with AI-powered suggestions,
            right in your editor.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.downloadButton}>Download for Windows</button>
            <button className={styles.altButton}>Try GitHub Copilot</button>
          </div>
          <p className={styles.webVersion}>
            <a href="#">Web</a>, <a href="#">Insiders edition</a>, or <a href="#">other platforms</a>
          </p>
        </div>
        <div className={styles.heroImage}>
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
            alt="VS Code Interface"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Why VS Code?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>IntelliSense</h3>
            <p>
              Go beyond syntax highlighting and autocomplete with IntelliSense, which provides smart
              completions based on variable types, function definitions, and imported modules.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Run and Debug</h3>
            <p>
              Debug code right from the editor. Launch or attach to your running apps and debug with
              break points, call stacks, and an interactive console.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Built-in Git</h3>
            <p>
              Working with Git and other SCM providers has never been easier. Review diffs, stage files,
              and make commits right from the editor.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>Extensions</h3>
            <p>
              Extend and customize Visual Studio Code to make it your own. Select from thousands of
              extensions in our marketplace.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
