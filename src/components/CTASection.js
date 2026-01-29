'use client';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={`${styles.parallaxSection} scroll-animate`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className={styles.subtitle}>
              Let AWK Corporation Transform Your Vision into a Lasting Reality.
            </div>
            <h2 className={styles.title}>Ready to start your project with AWK?</h2>
          </div>
          <div className="col-lg-4 text-end">
            <button className={styles.appointmentBtn}>MAKE AN APPOINTMENT</button>
          </div>
        </div>
      </div>
    </section>
  );
}