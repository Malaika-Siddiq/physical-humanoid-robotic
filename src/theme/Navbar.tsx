import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">🤖 AI Robotics</Link>
      </div>

      <button
        className={styles.menuBtn}
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      <div className={`${styles.links} ${open ? styles.open : ''}`}>
        <Link to="/docs/intro" onClick={() => setOpen(false)}>Chapters</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/signin" className={styles.btn}>Sign In</Link>
        <Link to="/signup" className={styles.btnPrimary}>Sign Up</Link>
      </div>
    </nav>
  );
}
