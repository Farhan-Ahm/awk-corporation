'use client';
import styles from './WorkingUs.module.css';

export default function WorkingUs() {
  return (
    <section className={`${styles.parallaxSection} scroll-animate`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className={styles.subtitle}>
              Let AWK transform your vision into enduring reality
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