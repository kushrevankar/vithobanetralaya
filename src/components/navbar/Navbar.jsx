import React from 'react';
import styles from './navbar.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo"/>
      </div>
      <div className={styles.logotext}>Vithoba Netralaya</div>
      <div className={styles.links}>
        <Link to="/about" className={styles.link}>About</Link>
        <Link to="/doctors" className={styles.link}>Doctors</Link>
        <Link to="/treatments" className={styles.link}>Treatments</Link>
        <Link to="/facilities" className={styles.link}>Facilities</Link>
        <Link to="/trust" className={styles.link}>Trust</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
        <div className={styles.button}>
          <button className={`${styles.link} ${styles.cta}`} onClick={() => navigate('/appointment')}>Book an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;