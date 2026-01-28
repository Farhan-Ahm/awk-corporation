'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Projects.module.css';

export default function Projects() {  
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>PROJECTS</h1>
          <p className={styles.heroBreadcrumb}>
            Delivering expert support that keeps your operations moving.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      
    </>
  );
}