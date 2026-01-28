'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Engineering.module.css';

export default function Engineering() {  
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
          <h1 className={styles.heroTitle}>ENGINEERING SERVICES</h1>
          <p className={styles.heroBreadcrumb}>
            Delivering tailored engineering solutions for infrastructure, energy, and industrial projects.
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
                  src="/images/image_2.jpg" 
                  alt="AWK Corporation Team"
                  className={styles.aboutImage}
                />
              </div>
            </div>
          <div className="col-lg-6 scroll-animate">
  <div className={styles.aboutText}>
    <div className={styles.subtitle}>THE WAY WE WORK</div>
    <h2 className={styles.title}>Practical Engineering, Proven by Experience</h2>
    <p className={styles.description}>
      We deliver integrated, multi-discipline engineering services supporting 
      energy, industrial, and infrastructure projects—from concept development 
      through execution.
    </p>
    <p className={styles.description}>
      Our team works collaboratively with clients to provide solutions that are safe,
       constructible, and economically viable, while fully complying with applicable 
       regulatory, code, and standards requirements. All engineering services are 
       performed under appropriate professional engineering oversight and in accordance
        with APEGA, APEGS, and OIQ requirements, ensuring accountability, quality, 
        and public safety.
    </p>
  </div>
</div>
{/* Full Width Paragraph */}
          <div className="row">
            <div className="col-12">
              <p className={styles.descriptionFullWidth}>
                From agricultural facilities and petroleum pipeline systems to complex 
                industrial upgrades, our focus remains on long-term reliability and
                 performance driven by practical design and field-ready execution 
                 strategies.
              </p>
            </div>
          </div>

          


            
          </div>
        </div>
  
        <div className="row mt-5">
          <div className="col-12 mb-4 scroll-animate">
            <div className={styles.sectionHeader}>
              <h2 className={styles.coreValuesTitle}>What We Deliver</h2>
              <p className={styles.coreValuesSubtitle}>Multi-discipline engineering expertise for complex projects</p>
            </div>
          </div>
          
          <div className={styles.coreValuesContainer}>
            <div className="row">
              <div className="col-lg-4 col-md-4 mb-4 scroll-animate">
                <div className={styles.coreValueCard}>
                  <div className={styles.coreValueIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
                    </svg>
                  </div>
                  <h3 className={styles.coreValueTitle}>Instrumentation, Controls, and Electrical Engineering
</h3>
                  <ul className={styles.coreValueDescription}>
                    <li>Development of instrumentation and control philosophies, system architectures, and control narratives</li>
                      <li>PLC, DCS, and SCADA system design, configuration, and integration</li>
                        <li>Electrical power system studies, including load flow, short circuit, and arc flash analysis</li>
                          <li>Preparation of single-line diagrams, wiring diagrams, loop drawings, and I/O lists</li>
                          <li>Hazardous area classification and compliance with applicable codes and standards</li>
                          <li>Commissioning support, testing, and system validation</li>

                  </ul>
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
                  <h3 className={styles.coreValueTitle}>Civil & Structural Engineering</h3>
                  <ul className={styles.coreValueDescription}>
                    <li>Site development planning, grading, drainage, and utility coordination</li>
                    <li>Structural analysis and design for industrial, commercial, and infrastructure facilities</li>
                    <li>Preparation of construction drawings, specifications, and technical reports</li>
                    <li>Assessment, rehabilitation, and retrofit of existing structures</li>
                    <li>Foundation design, including shallow and deep foundation systems</li>
                    <li>Construction support, inspections, and field engineering services</li>
                  </ul>
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
                  <h3 className={styles.coreValueTitle}>Engineering Project Management</h3>
                  <ul className={styles.coreValueDescription}>
                    <li>Project planning, scheduling, and cost control throughout the project lifecycle</li>
                    <li>Scope definition, change management, and risk mitigation</li>
                    <li>Coordination of multidisciplinary engineering teams and external stakeholders</li>
                    <li>Progress reporting, budget tracking, and performance monitoring</li>
                    <li>Contract administration and consultant/contractor oversight</li>
                    <li>Quality assurance and quality control (QA/QC) management</li>
                  </ul>
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
                  <h3 className={styles.coreValueTitle}>Mechanical Engineering</h3>
                  <ul className={styles.coreValueDescription}>
                    <li>Mechanical system design, including HVAC, piping, and equipment layout</li>
                    <li>Equipment specification, selection, and datasheet development</li>
                    <li>Stress analysis and mechanical integrity assessments</li>
                    <li>Preparation of P&IDs, layouts, and mechanical design calculations</li>
                    <li>Constructability reviews and installation support</li>
                    <li>Commissioning and performance verification</li>
                  </ul>
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
                  <h3 className={styles.coreValueTitle}>Chemical & Process Engineering</h3>
                  <ul className={styles.coreValueDescription}>
                    <li>Process design, modeling, and simulation</li>
                    <li>Development of process flow diagrams (PFDs) and piping and instrumentation diagrams (P&IDs)</li>
                    <li>Material and energy balances and equipment sizing</li>
                    <li>Process optimization, debottlenecking, and efficiency improvement studies</li>
                    <li>HAZOP, risk assessments, and regulatory compliance support</li>
                    <li>Start-up assistance and operational troubleshooting</li>
                  </ul>
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
                  <h3 className={styles.coreValueTitle}>Supply Chain Management & Procurement</h3>
                  <ul className={styles.coreValueDescription}>
                    <li>Procurement strategy development and vendor prequalification</li>
                    <li>Preparation of technical requisitions and bid evaluations</li>
                    <li>Supplier coordination and expediting of critical equipment and materials</li>
                    <li>Cost control, logistics planning, and delivery tracking</li>
                    <li>Quality inspections and compliance verification</li>
                    <li>Contract negotiation support and supplier performance management</li>
                  </ul>
                </div>
              </div>

             

              



              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}