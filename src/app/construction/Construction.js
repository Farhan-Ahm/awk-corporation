'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Construction.module.css';
import Link from 'next/link';

export default function Construction() {  
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
                  <span className={styles.breadcrumbCurrent}>Construction</span>
                </li>
              </ol>
            </nav>
          </div>
          
          <h1 className={styles.heroTitle}>COMMERCIAL & RESIDENTIAL SERVICES</h1>
          <p className={styles.heroBreadcrumb}>
            Delivering expert support that keeps your operations moving.
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
                  src="/images/constructionpage.jpg" 
                  alt="AWK Corporation Team"
                  className={styles.aboutImage}
                />
              </div>
            </div>
          <div className="col-lg-6 scroll-animate">
  <div className={styles.aboutText}>
    <div className={styles.subtitle}>THE WAY WE WORK</div>
    <h2 className={styles.title}>Supporting Commercial & Residential Projects with Precision and Purpose</h2>
    <p className={styles.description}>
      We provide integrated engineering and project delivery solutions for 
      residential, commercial, and industrial clients. From home and healthcare 
      facility upgrades to the engineering and execution of complex industrial
       and structural systems, we bring clarity, precision, and accountability to
        every phase of delivery.
    </p>
    <p className={styles.description}>
      Working in close partnership with property owners, developers, and operations
       teams, we help reduce risk, minimize disruption, and enhance long-term asset value.
        Our approach is rooted in sound engineering, regulatory compliance, 
        and constructability—ensuring each solution is safe, efficient, and built to 
        perform, on schedule and within budget.
    </p>
  </div>
</div>


          


            
          </div>
        </div>
  
        <div className="row mt-5">
          <div className="col-12 mb-4 scroll-animate">
            <div className={styles.sectionHeader}>
              <h2 className={styles.coreValuesTitle}>How We Add Value</h2>
              <p className={styles.coreValuesSubtitle}>Tailored Engineering Solutions for Every Project Scale & Sector</p>
            </div>
          </div>
          
          <div className={styles.coreValuesContainer}>
            <div className="row">
              <div className="col-lg-4 col-md-4 mb-4 scroll-animate">
                <div className={styles.coreValueCard}>
                  <div className={styles.coreValueIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"></path>
  <path d="M10 22V8"></path>
  <path d="M14 22V14"></path>
  <rect x="2" y="14" width="4" height="8"></rect>
  <rect x="18" y="14" width="4" height="8"></rect>
</svg>
                  </div>
                  <h3 className={styles.coreValueTitle}>Commercial</h3>
                  <ul className={styles.coreValueDescription}>
                    <li>Office buildings and corporate campuses</li>
                      <li>Retail developments and shopping centres</li>
                        <li>Mixed-use commercial developments</li>
                          <li>Institutional facilities (schools, universities, and training centres)</li>
                          <li>Hospitality projects (hotels, conference centres, Resturants)</li>
                          <li>Healthcare facilities and medical offices</li>

                  </ul>
                  {/*<a href="" className={styles.learnMoreBtn}>
                    LEARN MORE
                  </a>*/}
                </div>
                
              </div>
              
              <div className="col-lg-4 col-md-4 mb-4 scroll-animate">
                <div className={styles.coreValueCard}>
                  <div className={styles.coreValueIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  </div>
                  <h3 className={styles.coreValueTitle}>Residential</h3>
                  <ul className={styles.coreValueDescription}>
                    <li>Multi-family residential buildings and apartment complexes</li>
                    <li>Condominium developments and townhouse projects</li>
                    <li>Affordable and supportive housing developments</li>
                    <li>Seniors’ housing and assisted living facilities</li>
                    <li>Balcony, façade, and structural rehabilitation projects</li>
                    <li>Low-rise and mid-rise residential developments</li>
                  </ul>
                   {/*<a href="" className={styles.learnMoreBtn}>
                    LEARN MORE
                  </a>*/}
                </div>
              </div>
              
              <div className="col-lg-4 col-md-4 mb-4 scroll-animate">
                <div className={styles.coreValueCard}>
                  <div className={styles.coreValueIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                  <h3 className={styles.coreValueTitle}>Industrial</h3>
                  <ul className={styles.coreValueDescription}>
                    <li>Manufacturing and processing facilities</li>
                    <li>Energy and utilities infrastructure (oil & gas, renewables, power generation)</li>
                    <li>Pipelines and terminal facilities</li>
                    <li>Brownfield and greenfield industrial developments</li>
                    <li>Agricultural and Storage Facilities</li>
                    <li>Water and wastewater treatment facilities</li>
                  </ul>
                   {/*<a href="" className={styles.learnMoreBtn}>
                    LEARN MORE
                  </a>*/}
                </div>
              </div>

               
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}