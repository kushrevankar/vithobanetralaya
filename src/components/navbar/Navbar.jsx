import React from "react";
import styles from "./navbar.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/lll.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`${styles.container} ${isHomePage ? styles.transparent : ""}`}
    >
      <img src={logo} alt="Logo" className={styles.logo} />
      <Link to="/" className={styles.logotext}>
        Vithoba Netralaya
      </Link>
      <div className={styles.links}>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/doctors" className={styles.link}>
          Doctors
        </Link>
        <Link to="/treatments" className={styles.link}>
          Treatments
        </Link>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
        <div className={styles.button}>
          <button
            className={`${styles.link} ${styles.cta}`}
            onClick={() => navigate("/appointment")}
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
