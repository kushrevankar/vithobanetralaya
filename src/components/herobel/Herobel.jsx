import React from 'react'
import styles from './herobel.module.css'
import lenseye from '../../images/lenseye.jpeg'

const Herobel = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <div className={styles.title}>Providing Compassionate and Reliable Eye Care in Hubli</div>
            <div className={styles.details}>
                Vithoba Netralaya excels in treating eye conditions, offering advanced treatment and surgical facilities supported by expert ophthalmic consultants. 
                Committed to quality care, it provides affordable services for all. 
                The hospital’s ophthalmologists are available year-round to serve patients.
            </div>
            <div className={styles.button}>
                <button type="button" className={styles.click}>Read More</button>
            </div>
        </div>
        <div className={styles.image}>
            <img src = {lenseye} alt="machinery"/>
        </div>
    </div>
  )
}

export default Herobel;