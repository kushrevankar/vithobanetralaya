import React from "react";
import styles from "./appointment.module.css";
import aboutBg from "../../images/app.jpg";

const Appointment = () => {
  return (
    <div className={styles.principle}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className={styles.heading}>
          Please fill out the form to schedule a consultation with our specialist.
        </div>
        <div className={styles.form}>
          <iframe
            src="https://tally.so/r/3xEeDE?transparentBackground=1"
            loading="lazy"
            height="500"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Appointment Form"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
