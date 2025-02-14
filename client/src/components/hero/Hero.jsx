import React from 'react'
import styles from './hero.module.css'
import eyecare from '../../images/eyecare.jpg'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src = {eyecare} alt="eyecare"/>
      </div>
      <div className={styles.heading}>
        <div className={styles.title}>Get a crystal clear vision.</div>
        <div className={styles.details}>See the world in a whole new light with expert eye care.</div>
      </div>
    </div>
  )
}

export default Hero;