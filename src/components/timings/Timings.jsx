import React from 'react'
import styles from './timings.module.css'
import Clock from '../../images/clock.png'
import { Link } from "react-router-dom";

const Timings = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <img src={Clock} alt="timings" />
            Appointment Timings
        </div>
        <div className={styles.desc}>
            Our team of experienced eye specialists is here to assist you. Schedule a consultation with one of our experts during the following hours:
        </div>
        <div className={styles.timings}>
            Monday to Saturday - 12:00<sup>PM</sup> — 06:00<sup>PM</sup>
        </div>
        <Link to="/doctors" className={styles.doctors}>
            <button className={styles.button}>Meet Our Doctors</button>
        </Link>
    </div>
  )
}

export default Timings;