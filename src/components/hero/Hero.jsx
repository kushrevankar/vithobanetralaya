import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";
import heroBg from "../../images/herong.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.background} style={{ backgroundImage: `url(${heroBg})` }}>
      <div
        className={styles.container}
        style={{
          opacity: Math.max(0, 1 - scrollY / 400)
        }}
      >
        <div className={styles.heading}>
          <div className={styles.title}>Get a crystal clear vision.</div>
          <div className={styles.details}>
            See the world in a whole new light with expert personalized eye care.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
