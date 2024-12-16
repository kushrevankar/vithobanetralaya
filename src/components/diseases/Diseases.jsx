import React from 'react'
import styles from './diseases.module.css'
import eye from '../../images/eye.png'

const Diseases = () => {
    const generaldiseases = ['Myopia', 'Hypermetropia', 'Pink Eye', 'Astigmatism', 'Lazy Eyes', 'Presbyopia'];
    const surgerydiseases = ['Cataract', 'Optic Nerve Disorders', 'Glaucoma', 'Macular Degeneration', 'Squint', 'Eye Cancer'];
    const eyecare = ['General Eye Exam', 'LASIK', 'MISC', 'Glaucoma Surgery', 'Oculoplasty', 'Ocular Prosthesis'];
  return (
    <div className={styles.container}>
        <div className={styles.heading}>One Stop Solution for All Eye Diseases</div>
        <div className={styles.sections}>
            <div className={styles.general}>
                <img src={eye} alt="eye"/>
                <div className={styles.generaltitle}>General Eye Diseases</div>
                <div className={styles.list}>
                    <ul>
                        {generaldiseases.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                </div>
            </div>
            <div className={styles.surgery}>
                <img src={eye} alt="eye"/>
                <div className={styles.surgerytitle}>Conditions Requiring Surgery</div>
                <div className={styles.list}>
                    <ul>
                        {surgerydiseases.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                </div>
            </div>
            <div className={styles.eyecare}>
                <img src={eye} alt="eye"/>
                <div className={styles.eyecaretitle}>Eye Care</div>
                <div className={styles.list}>
                    <ul>
                        {eyecare.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Diseases;