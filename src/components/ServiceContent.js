'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './ServiceContent.module.css';

export default function ServiceContent() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { number: 10, label: 'Years of Experience', suffix: '+' },
    { number: 50, label: 'Projects Completed', suffix: '+' },
    { number: 50, label: 'Expert Team Members', suffix: '+' },
    { number: 5, label: 'Awards Won', suffix: '+' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.number / 50; // Adjust speed here
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 30); // Adjust animation speed here
    });
  };

  return (
    <section className={styles.aboutSection}>
      <div className="container">
        
        
      </div>
  
<div className="row mt-5">
  <div className="col-12 mb-5 scroll-animate">
    <div className={styles.sectionHeader}>
      <h2 className={styles.coreValuesTitle}>Our Services</h2>
      
    </div>
  </div>
  
  {/* ADD THIS CONTAINER DIV */}
 <div className={styles.coreValuesContainer}>
  <div className="row">
    {/* ENGINEERING */}
    <div className="col-lg-6 col-md-6 col-sm-12 mb-4 scroll-animate">
      <div className={styles.coreValueCard}>
        <div className={styles.coreValueIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <h3 className={styles.coreValueTitle}>ENGINEERING</h3>
        <p className={styles.coreValueDescription}>
          Professional engineering solutions with precision, innovation, and technical excellence for complex projects.
        </p>
        <a href="/engineering" className={styles.learnMoreBtn}>
          LEARN MORE
        </a>
      </div>
    </div>
    
    {/* CONSTRUCTION */}
    <div className="col-lg-6 col-md-6 col-sm-12 mb-4 scroll-animate">
      <div className={styles.coreValueCard}>
        <div className={styles.coreValueIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <h3 className={styles.coreValueTitle}>CONSTRUCTION</h3>
        <p className={styles.coreValueDescription}>
          Quality construction services delivering durable structures with safety, efficiency, and craftsmanship.
        </p>
        <a href="/construction" className={styles.learnMoreBtn}>
          LEARN MORE
        </a>
      </div>
    </div>
    
    {/* PROPERTY MANAGEMENT */}
    <div className="col-lg-6 col-md-6 col-sm-12 mb-4 scroll-animate">
      <div className={styles.coreValueCard}>
        <div className={styles.coreValueIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
        </div>
        <h3 className={styles.coreValueTitle}>PROPERTY MANAGEMENT</h3>
        <p className={styles.coreValueDescription}>
          Comprehensive property management ensuring optimal maintenance, tenant satisfaction, and asset value.
        </p>
        <a href="/property" className={styles.learnMoreBtn}>
          LEARN MORE
        </a>
      </div>
    </div>

    {/* INVESTMENT OPPORTUNITIES */}
    <div className="col-lg-6 col-md-6 col-sm-12 mb-4 scroll-animate">
      <div className={styles.coreValueCard}>
        <div className={styles.coreValueIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </div>
        <h3 className={styles.coreValueTitle}>INVESTMENT OPPORTUNITIES</h3>
        <p className={styles.coreValueDescription}>
          Strategic investment solutions maximizing returns with expert guidance and market insights.
        </p>
        <a href="/investment" className={styles.learnMoreBtn}>
          LEARN MORE
        </a>
      </div>
    </div>

  </div>
</div>



</div>

    </section>
  );
}