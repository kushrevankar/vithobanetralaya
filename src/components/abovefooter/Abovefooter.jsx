import React from 'react'
import styles from './abovefooter.module.css'

const Abovefooter = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            Eye Care you won't find elsewhere
        </div>
        <button className={styles.button}>
            Book an Appointment
        </button>
    </div>
  )
}

export default Abovefooter;