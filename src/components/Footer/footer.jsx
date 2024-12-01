// src/components/Footer.jsx
import styles from './footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;