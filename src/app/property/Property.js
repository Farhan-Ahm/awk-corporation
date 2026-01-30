'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Property.module.css';
import Link from 'next/link';

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
                  <span className={styles.breadcrumbCurrent}>Property</span>
                </li>
              </ol>
            </nav>
          </div>
          
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
  
        {/* WHAT WE DELIVER Section */}
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 mb-4 scroll-animate">
              <div className={styles.sectionHeader}>
                <h2 className={styles.coreValuesTitle}>WHAT WE DELIVER</h2>
                <p className={styles.coreValuesSubtitle}>Performance-Focused Property Management</p>
              </div>
            </div>
          </div>

          {/* Service Tiles Grid */}
          <div className="row">
            {/* Tile 1 - Building Envelope */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 scroll-animate">
              <div className={styles.serviceTile}>
                <div className={styles.tileIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                </div>
                <h3 className={styles.tileTitle}>Building Envelope</h3>
                <div className={styles.tileContent}>
                  <ul>
                    <li>Facade repairs & rehabilitation</li>
                    <li>Siding & parging restoration</li>
                    <li>Sealant replacement programs</li>
                    <li>Envelope assessments</li>
                    <li>Moisture intrusion investigations</li>
                  </ul>
                </div>
                <div className={styles.tileBadge}>Protection</div>
              </div>
            </div>

            {/* Tile 2 - Structural */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 scroll-animate">
              <div className={styles.serviceTile}>
                <div className={styles.tileIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                    <line x1="15" y1="3" x2="15" y2="21"></line>
                  </svg>
                </div>
                <h3 className={styles.tileTitle}>Structural Integrity</h3>
                <div className={styles.tileContent}>
                  <ul>
                    <li>Concrete repairs & crack injection</li>
                    <li>Structural rehabilitation</li>
                    <li>Parkade & underground repairs</li>
                    <li>Balcony & guardrail systems</li>
                    <li>Foundation stabilization</li>
                  </ul>
                </div>
                <div className={styles.tileBadge}>Stability</div>
              </div>
            </div>

            {/* Tile 3 - Roofing */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 scroll-animate">
              <div className={styles.serviceTile}>
                <div className={styles.tileIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                    <line x1="12" y1="22" x2="12" y2="15.5"></line>
                  </svg>
                </div>
                <h3 className={styles.tileTitle}>Roofing & Waterproofing</h3>
                <div className={styles.tileContent}>
                  <ul>
                    <li>Roof repairs & replacements</li>
                    <li>Preventative maintenance programs</li>
                    <li>Waterproofing systems</li>
                    <li>Drainage improvements</li>
                    <li>Membrane installations</li>
                  </ul>
                </div>
                <div className={styles.tileBadge}>Dry & Secure</div>
              </div>
            </div>

            {/* Tile 4 - Safety */}
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 scroll-animate">
              <div className={styles.serviceTile}>
                <div className={styles.tileIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className={styles.tileTitle}>Safety & Compliance</h3>
                <div className={styles.tileContent}>
                  <ul>
                    <li>Life-safety upgrades</li>
                    <li>Accessibility improvements</li>
                    <li>Code compliance upgrades</li>
                    <li>Emergency repairs</li>
                    <li>Fire safety systems</li>
                  </ul>
                </div>
                <div className={styles.tileBadge}>Compliant</div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Banner Section */}
        <div className={styles.exploreBannerSection}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12 mb-4 mb-lg-0 scroll-animate">
                <div className={styles.exploreContent}>
                  <h2 className={styles.exploreHeading}>Explore Our Complete Range of Services</h2>
                  <p className={styles.exploreSubheading}>
                    Beyond Property Management, discover our specialized expertise across multiple disciplines.
                  </p>
                  
                  <div className={styles.serviceHighlights}>
                    <Link href="/engineering" className={styles.highlightItem}>
                      <div className={styles.highlightIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M10 10v10"></path>
                          <path d="M14 10v10"></path>
                          <path d="M18 10v10"></path>
                          <path d="M2 10h20"></path>
                        </svg>
                      </div>
                      <div>
                        <h4>Engineering Services</h4>
                        <p>Technical precision & analysis</p>
                      </div>
                    </Link>
                    
                    <Link href="/construction" className={styles.highlightItem}>
                      <div className={styles.highlightIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                        </svg>
                      </div>
                      <div>
                        <h4>Construction Services</h4>
                        <p>Quality execution & delivery</p>
                      </div>
                    </Link>
                    
                    <Link href="/investment" className={styles.highlightItem}>
                      <div className={styles.highlightIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4>Investment Opportunities</h4>
                        <p>Strategic growth & value creation</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-12 scroll-animate">
                <div className={styles.ctaBox}>
                  <div className={styles.ctaIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <h3>Need a Different Service?</h3>
                  <p>Our team specializes in custom solutions tailored to your specific needs.</p>
                  <Link href="/contact" className={styles.ctaButton}>
                    Contact Us Today
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}