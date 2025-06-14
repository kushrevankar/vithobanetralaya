import React from 'react'
import styles from './doctors.module.css'
import doctorsBg from '../../images/doctorsng.jpg'
//import doctor from '../../images/anant.jpg'

const Doctors = () => {
  return (
    <div className={styles.principle}>
          <div
            className={styles.background}
            style={{ backgroundImage: `url(${doctorsBg})` }}
          >
            <div className={styles.container}>
              <div className={styles.heading}>Doctors</div>
            </div>
          </div>
          <div className={styles.descrips}>
            <div className={styles.description}>
              {/*<img src={doctor} alt="dr. anant revankar" className={styles.floatedImage} />*/}
              <h1 style={{ color: "black" }}>Our Doctors</h1>
              <p>
                Dr. Anant Revankar is the driving force behind Vithoba Netralaya Eye Clinic—a skilled and deeply compassionate ophthalmologist dedicated to delivering top-tier eye care at fair and accessible prices. 
                Available year-round, Dr. Revankar personally guides every patient through the treatment process, offering everything from LASIK and micro-incision cataract surgery to oculoplastic procedures and pediatric 
                eye care—all within a single-doctor setup. He chose this model intentionally: instead of outreach camps, he brings outreach into his clinic, keeping quality care within reach for the economically disadvantaged.
                With empathy as his guiding principle, Dr. Revankar prides himself on honest, ethical, and reliable service—treating patients with respect, clear communication, and unwavering professionalism. 
                This commitment doesn’t just show in his surgical skill but in the trust and gratitude reflected by those he treats. Though trained in ophthalmology, his true specialty is care—with every person 
                who walks through the clinic getting the same level of compassion and expertise you’d expect from a much larger team
              </p>
            </div>
          </div>
          <div className={styles.reviews}>
            <div className={styles.text}>
              <h1 style={{ color: "black", paddingBottom: 15 }}>
                Testimonials
              </h1>
              <p style={{ color: "#555", fontSize: 30 }}>
                "The eye specialist Dr. Anant highly skilled and kind.. He gently
                listened to my eye condition that has been troubling me for a while.
                I am of the opinion his core strength is his skill and empathy."
              </p>
              <p style={{ color: "#555", textAlign: "right", fontSize: 22 }}>
                — Aafaq, JustDial
              </p>
            </div>
          </div>
        </div>
  )
}

export default Doctors