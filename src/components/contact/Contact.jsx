import React from "react";
import styles from "./contact.module.css";
import contact from "../../images/contact.jpg";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className={styles.principle}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className={styles.container}>
          <div className={styles.heading}>Contact Us</div>
        </div>
      </div>
      <div className={styles.info}>
        <h1>Get in touch with us.</h1>
        <div className={styles.iconinfo}>
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <Phone color="white" size={48} />
            </div>
            <p>Please call on</p>
            <p className={styles.bold}>+7947123222</p>
            <p>to get support.</p>
          </div>

          {/* Email */}
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <Mail color="white" size={48} />
            </div>
            <p>Please mail us on</p>
            <p className={styles.bold}>vithobanetralaya@gmail.com</p>
            <p>to get support.</p>
          </div>

          {/* Address */}
          <div className={styles.card}>
            <div className={styles.iconCircle}>
              <MapPin color="white" size={48} />
            </div>
            <p>Vithoba Netralaya</p>
            <p className={styles.bold}>Vikas Nagar</p>
            <p>Hubli - 580021</p>
          </div>
        </div>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          title="Vithoba Memorial Hospital Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4351.4295870241!2d75.12761418590313!3d15.350037071856624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d73ffbadb60b%3A0xf2cac68af64e015e!2sVithoba%20Memorial%20Hospital%20%26%20Vithoba%20Netralaya!5e0!3m2!1sen!2sin!4v1749970653561!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
