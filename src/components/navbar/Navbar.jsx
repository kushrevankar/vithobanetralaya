import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo"/>
      </div>
      <div className={styles.links}>
        <Link to="/about" className={styles.link}>About</Link>
        <Link to="/doctors" className={styles.link}>Doctors</Link>
        <Link to="/treatments" className={styles.link}>Treatments</Link>
        <Link to="/facilities" className={styles.link}>Facilities</Link>
        <Link to="/trust" className={styles.link}>Trust</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
        <Link to="/appointment" className={`${styles.link} ${styles.cta}`}>Book an Appointment</Link>
      </div>
    </div>
  );
};

export default Navbar;