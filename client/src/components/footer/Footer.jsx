import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <div className={styles.item}>
            <MapPin />
            <p className={styles.address}>Vikas Nagar, Hubli - 580021 (Behind JRHP Petrolpump)</p>
          </div>
          <div className={styles.item}>
            <Phone />
            <p>+7947123222</p>
          </div>
          <div className={styles.item}>
            <Mail />
            <p>To be filled</p>
          </div>
        </div>
        
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/doctors">Our Doctors</a></li>
            <li><a href="/treatments">Treatments</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div className={styles.emergency}>
          <h3>Emergency</h3>
          <p>24/7 Emergency Services Available</p>
          <div className={styles.hotline}>
            Emergency Hotline: To be filled
          </div>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <p>&copy; 2024 Vithoba Netralaya Eye Hospital. All Rights Reserved.</p>
        <p>Designed and Developed solely by @kushrevankar (GitHub)</p>
      </div>
    </footer>
  );
};

export default Footer;