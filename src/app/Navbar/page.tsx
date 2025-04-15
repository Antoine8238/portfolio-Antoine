"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <span className={styles.logo}>Portfolio Antoine<span className={styles.dot}>.</span></span>
        <ul className={styles.navLinks}>
          <li><Link href="#hero" className={styles.link}>Accueil</Link></li>
          <li><Link href="#skills" className={styles.link}>Compétences</Link></li>
          <li><Link href="#projects" className={styles.link}>Projets</Link></li>
          <li><Link href="#contact" className={styles.link}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;