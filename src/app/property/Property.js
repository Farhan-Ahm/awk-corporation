'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Property.module.css';

export default function Property() {  
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
          <h1 className={styles.heroTitle}>PROPERTY MANAGEMENT</h1>
          <p className={styles.heroBreadcrumb}>
            Precision-Driven Property Management.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.aboutSection}>
        <div className="container">
          {/* About Content */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 scroll-animate">
              <div className={styles.imageWrapper}>
                <img 
                  src="/images/PROPERTY.png" 
                  alt="AWK Corporation Team"
                  className={styles.aboutImage}
                />
              </div>
            </div>
          <div className="col-lg-6 scroll-animate">
  <div className={styles.aboutText}>
    <div className={styles.subtitle}>HOW WE WORK</div>
    <h2 className={styles.title}>Engineered Management for High-Performing Properties</h2>
    <p className={styles.description}>
      We provide engineering-informed property management solutions focused on asset protection, operational efficiency, and long-term value. Our disciplined, transparent approach combines accurate assessment, clear scoping, and practical execution to eliminate uncertainty and deliver predictable results.
    </p>
    <p className={styles.description}>
      By maintaining safe, organized, and compliant work practices, we minimize disruption to occupied properties while ensuring every solution is built to perform on schedule, on budget, and to the highest professional standards.
    </p>
  </div>
</div>
   
          </div>
        </div>
  
        <div className="row mt-5">
          <div className="col-12 mb-4 scroll-animate">
            <div className={styles.sectionHeader}>
              <h2 className={styles.coreValuesTitle}>WHAT WE DELIVER</h2>
              <p className={styles.coreValuesSubtitle}>Performance-Focused Property Management</p>
            </div>
          </div>
          
           <div className={styles.coreValuesContainer}>
            <div className="row">
              <div className="col-lg-8 col-md-4 mb-4 scroll-animate">
                <div className={styles.coreValueCard}>                 
                 <h3 className={styles.coreValueTitle}></h3>
                  <ul className={styles.coreValueDescription}>
                  <li>Building envelope repairs and rehabilitation (façades, siding, parging, sealants)</li>
                  <li>Balcony, guardrail, and handrail repairs or replacements</li>
                  <li>Roof repairs, replacements, and preventative maintenance programs</li>
                  <li>Parkade and underground parking structure repairs</li>
                  <li>Concrete repairs, crack injection, and structural rehabilitation</li>
                  <li>Waterproofing and drainage improvements</li>
                  <li>Interior and exterior common area upgrades</li>
                  <li>Stairwell, corridor, and life-safety compliance upgrades</li>
                    <li>Window and door replacement or retrofit programs</li>
                    <li>Envelope assessments and moisture intrusion investigations</li>
                    <li>Deferred maintenance and capital repair projects</li>
                    <li>Emergency repairs and urgent deficiency remediation</li>
                    <li>Accessibility upgrades and barrier-free improvements</li>
                    <li>Preventative maintenance planning and scope development</li>
                  </ul>
                  
                </div>
                
              </div>
              
           <div className="col-lg-4 col-md-4 mb-4 scroll-animate">
  <div className={styles.exploreCard}>
    <h3 className={styles.exploreTitle}>Explore Other Categories</h3>
    <div className={styles.exploreContent}>
      <p>Discover our complete range of specialized services:</p>
      
      <div className={styles.categoryLinks}>
        <a href="/engineering" className={styles.categoryLink}>
          <div className={styles.categoryIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 10v10"></path>
              <path d="M14 10v10"></path>
              <path d="M18 10v10"></path>
              <path d="M2 10h20"></path>
              <path d="M22 10v10"></path>
              <path d="M2 10v10"></path>
              <path d="M6 10v10"></path>
              <polygon points="10 10 22 10 18 4 6 4"></polygon>
            </svg>
          </div>
          <span>Engineering Services</span>
          <div className={styles.linkArrow}>→</div>
        </a>
        
        <a href="/construction" className={styles.categoryLink}>
          <div className={styles.categoryIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2"></rect>
              <path d="M12 6v12"></path>
              <path d="M17 6v12"></path>
              <path d="M7 6v12"></path>
            </svg>
          </div>
          <span>Construction Services</span>
          <div className={styles.linkArrow}>→</div>
        </a>
        
        <a href="/investment" className={styles.categoryLink}>
          <div className={styles.categoryIcon}>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
  <polyline points="17 6 23 6 23 12"></polyline>
</svg>
          </div>
          <span>Investment Opportunities</span>
          <div className={styles.linkArrow}>→</div>
        </a>
      </div>
      
      <div className={styles.contactNote}>
        <p>Need a different service?</p>
        <a href="/contact" className={styles.contactLink}>Contact us today</a>
      </div>
    </div>
  </div>
</div>

               
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}