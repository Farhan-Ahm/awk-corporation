'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Investment.module.css';
import Link from 'next/link';

export default function Investment() {  
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
          {/* Creative Breadcrumb */}
          <div className={styles.breadcrumbWrapper}>
            <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
              <ol className={styles.breadcrumbList}>
                <li className={styles.breadcrumbItem}>
                  <Link href="/" className={styles.breadcrumbLink}>
                    <svg 
                      className={styles.homeIcon} 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    
                  </Link>
                </li>
                <li className={styles.breadcrumbSeparator}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </li>
                <li className={styles.breadcrumbItem}>
                  <Link href="/services" className={styles.breadcrumbLink}>
                    Services
                  </Link>
                </li>
                <li className={styles.breadcrumbSeparator}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </li>
                <li className={`${styles.breadcrumbItem} ${styles.active}`}>
                  <span className={styles.breadcrumbCurrent}>Investment</span>
                </li>
              </ol>
            </nav>
          </div>
          
          <h1 className={styles.heroTitle}>INVESTMENT OPPORTUNITIES</h1>
          <p className={styles.heroBreadcrumb}>
            Strategic Construction. Measured Investment Returns.
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
                  src="/images/const-inves.jpg" 
                  alt="AWK Corporation Team"
                  className={styles.aboutImage}
                />
              </div>
            </div>
          <div className="col-lg-6 scroll-animate">
  <div className={styles.aboutText}>
    <div className={styles.subtitle}>HOW WE INVEST</div>
    <h2 className={styles.title}>AWK Corporation – Investment Vision</h2>
    <p className={styles.description}>
      AWK Corporation provides investors with direct access to premium infrastructure
       and property development opportunities across select global markets. 
       Our investments span land acquisition, residential and commercial construction, 
       and engineered infrastructure projects—each designed to deliver sustainable,
        long-term capital appreciation through disciplined execution and asset-backed 
        strategies.
      </p>
    <p className={styles.description}>
      Our investment philosophy is grounded in engineering precision, construction 
      certainty, and institutional-grade governance. Every project is underpinned
       by strong fundamentals: strategically located land, efficient and intelligent 
       design, tightly managed construction costs, and clearly defined exit pathways.
    </p>
  </div>
</div>

{/* Full Width Paragraph */}
          <div className="row">
            <div className="col-12">
              <p className={styles.descriptionFullWidth}>
               We partner with investors who value tangible assets, international 
               diversification, and professionally managed development risk. 
               At AWK Corporation, we don’t pursue speculation we design value, 
               control outcomes, and build enduring performance.
              </p>
            </div>
          </div>
   
          </div>
        </div>
  
        <div className="row mt-5">
          <div className="col-12 mb-4 scroll-animate">
            <div className={styles.sectionHeader}>
              <h2 className={styles.coreValuesTitle}>CURRENT INVESTMENTS</h2>
              
            </div>
          </div>
          
           <div className={styles.coreValuesContainer}>
            <div className="row">
              <div className="col-lg-8 col-md-4 mb-4 scroll-animate">
                <div className={styles.coreValueCard}>                 
                 <h3 className={styles.coreValueTitle}></h3>
                  <ul className={styles.coreValueDescription}>
                  <li>AWK Corporation is undertaking the acquisition of four residential land parcels with a combined value exceeding USD 500,000. Each lot measures approximately 1,905 sq. ft., delivering a total net residential land area of 7,625 sq. ft.</li>
                  
                  <li>The development phase is scheduled to commence between 2026 and 2027, with a targeted projected return of approximately 30%.</li>
                  <li>This investment is being executed in Pakistan through a strategic partnership with InterAllied Enterprises (Private) Limited, reinforcing local expertise and operational execution.</li>
                  
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
        
        <a href="/property" className={styles.categoryLink}>
          <div className={styles.categoryIcon}>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 9l9-7 9 7"/>
  <path d="M9 22V12h6v10"/>
</svg>

          </div>
          <span>Property Management</span>
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