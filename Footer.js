import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      <ul className={styles.socialLinks}>
        <li>
          <a href="https://github.com/Dmunyi" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </a>
        </li>
        
        <li>
          <a href="https://www.linkedin.com/in/derrick-gatonye-220341273/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;