'use client';
import styles from './ServicesHero.module.css';
import Link from 'next/link';


export default function ServicesHero() {
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
                <li className={`${styles.breadcrumbItem} ${styles.active}`}>
                  <span className={styles.breadcrumbCurrent}>Services</span>
                </li>
              </ol>
            </nav>
          </div>
          
          <h1 className={styles.heroTitle}>ENGINEERING WITH PRECISION</h1>
          <p className={styles.heroBreadcrumb}>
            From Vision to Reality – Engineering Solutions That Deliver..
          </p>             
        </div>       
      </section>

    </>
  );
}