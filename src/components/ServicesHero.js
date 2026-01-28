'use client';
import styles from './ServicesHero.module.css';

export default function ServicesHero() {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>ENGINEERING WITH PRECISION</h1>
        <p className={styles.heroBreadcrumb}>
          From Vision to Reality – Engineering Solutions That Deliver..
        </p>
      </div>
    </section>
  );
}