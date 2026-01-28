'use client';
import { useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector(`.${styles.heroSection}`);
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.heroWrapper} id="home">
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>SINCE 2016</div>
          <h1>
            BUILDING YOUR <span className={styles.highlight}>VISION</span> WITH<br />
            TURNKEY ENGINEERING SOLUTIONS
          </h1>
          <div className={styles.heroButtons}>
            <button className={styles.btnPrimary}>CONTACT US →</button>
            <button className={styles.btnSecondary}>BOOK AN APPOINTMENT →</button>
          </div>
        </div>
      </div>
    </section>
  );
}