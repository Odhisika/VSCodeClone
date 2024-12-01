import React from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const faqs = [
    {
      question: "What is Visual Studio Code?",
      answer: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes."
    },
    {
      question: "Is VS Code free?",
      answer: "Yes! VS Code is free and open source. Our license is available at https://github.com/microsoft/vscode/blob/main/LICENSE.txt"
    },
    {
      question: "How do I update VS Code?",
      answer: "VS Code will automatically update when a new version is released. You can also manually check for updates by clicking Help > Check for Updates..."
    },
    {
      question: "How do I install extensions?",
      answer: "You can install extensions directly from VS Code by clicking the Extensions icon in the Activity Bar or by using the Quick Open command (Ctrl+P) and typing 'ext install' followed by the extension name."
    }
  ];

  return (
    <div className={styles.faq}>
      <div className={styles.header}>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about Visual Studio Code</p>
      </div>

      <div className={styles.searchSection}>
        <input type="text" placeholder="Search FAQ..." />
      </div>

      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className={styles.support}>
        <h2>Still need help?</h2>
        <div className={styles.supportOptions}>
          <a href="#" className={styles.supportCard}>
            <h3>Documentation</h3>
            <p>Browse our detailed documentation</p>
          </a>
          <a href="#" className={styles.supportCard}>
            <h3>Community</h3>
            <p>Ask questions in our community</p>
          </a>
          <a href="#" className={styles.supportCard}>
            <h3>GitHub Issues</h3>
            <p>Report bugs and request features</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;