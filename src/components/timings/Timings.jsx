import React from 'react'
import styles from './timings.module.css'
import Clock from '../../images/clock.png'

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
            Monday to Saturday - 09:30<sup>AM</sup> — 02:00<sup>PM</sup>   05:30<sup>PM</sup> — 08:00<sup>PM</sup>
        </div>
        <div className={styles.doctors}>
            <button className={styles.button}>Meet Our Doctors</button>
        </div>
    </div>
  )
}

export default Timings;