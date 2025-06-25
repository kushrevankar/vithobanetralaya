import React from "react";
import styles from "./about.module.css";
import aboutBg from "../../images/aboutng.jpg";
import extra from "../../images/extra.jpg";

const About = () => {
  return (
    <div className={styles.principle}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className={styles.container}>
          <div className={styles.heading}>About Us</div>
        </div>
      </div>
      <div className={styles.descrips}>
        <div className={styles.description}>
          <img src={extra} alt="machinery" className={styles.floatedImage} />
          <h1 style={{ color: "black" }}>About Us</h1>
          <p>
            Vithoba Netralaya Eye Hospital is a trusted place for people dealing
            with all kinds of eye problems. It’s run by Dr. Anant Revankar, a
            skilled and compassionate ophthalmologist who has made it his
            mission to provide quality eye care that’s actually affordable. He’s
            available all year round and treats every patient with the same
            dedication—no rush, no compromise. Even though it’s a single-doctor
            Hospital, the range of services offered here rivals that of larger
            hospitals. What really makes the place stand out, though, is Dr.
            Revankar’s belief that good eye care shouldn’t depend on how much
            money someone has. So instead of holding outreach camps elsewhere,
            he keeps his doors open to everyone—offering treatment at rates low
            enough that even the underprivileged can access the best care
            without hesitation. The hospital handles everything from common
            issues like cataracts and glaucoma to more complex problems.
            Treatments available include micro incision cataract surgery (MICS),
            oculoplasty, vision rehab, tonometry, squint correction, fundus
            fluorescein angiography, optical coherence tomography (OCT), custom
            optical corrections, eyelid surgeries (entropion/ectropion, ptosis),
            orthoptic exams, IOL implantation, aesthetic eye surgeries
            (including removal of eyebags, drooping of eyes) and paediatric eye
            surgeries. The hospital is organized into dedicated sections—like
            cataract/phaco, glaucoma, retina, squint and oculoplastics, and
            refractive care—so patients get focused, specialized treatment. And
            Dr. Revankar is involved in every step of the way, so nothing falls
            through the cracks. For Dr. Anant Revankar, this isn’t just a job.
            It’s a lifelong commitment—to serve, to heal, and to make sure no
            one is left behind just because they can’t afford to see clearly.
          </p>
        </div>
      </div>
      <div className={styles.mission}>
        <h1>Our Mission</h1>

        <div className={styles.point}>
          <h3>
            To deliver high-quality eye care in a compassionate and supportive
            environment
          </h3>
          <p>
            Vithoba Netralaya Eye Hospital is committed to providing exceptional
            ophthalmic care within a setting that prioritizes patient comfort
            and emotional well-being. Under the guidance of Dr. Anant Revankar,
            the Hospital fosters an atmosphere of empathy, professionalism, and
            individualized attention—ensuring that every patient feels
            respected, understood, and cared for.
          </p>
        </div>

        <div className={styles.point}>
          <h3>
            To uphold honesty, ethics, and reliability in every aspect of care
          </h3>
          <p>
            Integrity stands at the core of the Hospital’s practice. Dr.
            Revankar is dedicated to offering services that are transparent,
            ethical, and dependable. Patients can rely on the Hospital not only
            for medical expertise, but also for the reassurance that their
            well-being will always be prioritized with fairness and honesty.
          </p>
        </div>

        <div className={styles.point}>
          <h3>
            To build an inclusive eye care system that serves all sections of
            society
          </h3>
          <p>
            Vithoba Netralaya aims to create a model of eye care that is both
            excellent and equitable. The Hospital ensures that high-quality
            treatment is accessible to everyone, regardless of financial
            background, eliminating barriers to care and extending its services
            to those who need it most— without compromise.
          </p>
        </div>
      </div>
      <div className={styles.reviews}>
        <div className={styles.text}>
          <h1 style={{ color: "black", paddingBottom: 15 }}>
            Hear what our patients say.
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
  );
};

export default About;
