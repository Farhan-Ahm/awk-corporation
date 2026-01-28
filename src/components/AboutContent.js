'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './AboutContent.module.css';
import { LocationsBanner } from '../components/Locations';

export default function AboutContent() {
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
        {/* About Content */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 scroll-animate">
            <div className={styles.imageWrapper}>
              <img 
                src="/images/bg_1.jpg" 
                alt="AWK Corporation Team"
                className={styles.aboutImage}
              />
            </div>
          </div>
          <div className="col-lg-6 scroll-animate">
            <div className={styles.aboutText}>
              <div className={styles.subtitle}>WHO WE ARE</div>
              <h2 className={styles.title}>Where Experience Drives Results</h2>
              <p className={styles.description}>
                AWK Corporation is a multidisciplinary engineering and construction firm
                 delivering integrated project solutions across North America. With decades
                  of proven expertise, we execute safe, efficient, and fully compliant 
                  infrastructure projects within the energy, industrial, and processing 
                  sectors.
              </p>
              <p className={styles.description}>
                From initial concept through commissioning, our EPC delivery model 
                fosters collaboration, transparency, and accountability - ensuring 
                every project is delivered with precision and confidence.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Quality Craftsmanship</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Safety First Approach</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>On-Time Delivery</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Budget Conscious</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className={`${styles.statsSection} scroll-animate`}>
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className={styles.statCard}>
                  <h3 className={styles.statNumber}>
                    {counters[index]}{stat.suffix}
                  </h3>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="row mt-5">
          <div className="col-lg-6 mb-4 scroll-animate">
            <div className={styles.missionCard}>
             <img 
                src="/images/dart-mission-goal-success-svgrepo-com.svg" 
                alt="Mission Icon"
                className={styles.cardIconImage}
                />
              <h3 className={styles.cardTitle}>Our Mission</h3>
              <p className={styles.cardText}>
                To deliver reliable, high-quality engineering and construction services that meet our clients' goals with safety and integrity.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mb-4 scroll-animate">
            <div className={styles.visionCard}>
               <img 
                src="/images/eye-svgrepo-com.svg" 
                alt="Mission Icon"
                className={styles.cardIconImage}
                />
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <p className={styles.cardText}>
                To be a trusted partner in building sustainable infrastructure that drives progress and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
  {/* Core Values */}{/* Core Values Section */}{/* Core Values Section */}
<LocationsBanner/>

<div className="row mt-5">
  <div className="col-12 mb-5 scroll-animate">
    <div className={styles.sectionHeader}>
      <h2 className={styles.coreValuesTitle}>Our Core Values</h2>
      <p className={styles.coreValuesSubtitle}>The principles that guide everything we do</p>
    </div>
  </div>
  
  {/* ADD THIS CONTAINER DIV */}
  <div className={styles.coreValuesContainer}>
    <div className="row">
      <div className="col-lg-4 col-md-4 mb-4 scroll-animate">
        <div className={styles.coreValueCard}>
          <div className={styles.coreValueIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
            </svg>
          </div>
          <h3 className={styles.coreValueTitle}>Integrity</h3>
          <p className={styles.coreValueDescription}>
            We act honestly and transparently, building trust in every interaction.
          </p>
        </div>
      </div>
      
      <div className="col-lg-4 col-md-4 mb-4 scroll-animate">
        <div className={styles.coreValueCard}>
          <div className={styles.coreValueIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v4M12 16h.01"/>
            </svg>
          </div>
          <h3 className={styles.coreValueTitle}>Safety</h3>
          <p className={styles.coreValueDescription}>
            We prioritize the health and safety of our team, clients, and communities.
          </p>
        </div>
      </div>
      
      <div className="col-lg-4 col-md-4 mb-4 scroll-animate">
        <div className={styles.coreValueCard}>
          <div className={styles.coreValueIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h3 className={styles.coreValueTitle}>Excellence</h3>
          <p className={styles.coreValueDescription}>
            We deliver quality workmanship and strive for continual improvement.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}