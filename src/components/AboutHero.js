'use client';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>ENGINEERING THE FUTURE</h1>
        <p className={styles.heroBreadcrumb}>
          Discover the people and principles behind our infrastructure solutions.
        </p>
      </div>
    </section>
  );
}