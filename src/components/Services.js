'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Services.module.css';

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
       icon: '/images/engineer-config-svgrepo-com.svg',
      title: 'Engineering',
      description: 'Tailored solutions for infrastructure, energy, and industrial projects.',
      color: '#2C3E50',
      link: '/engineering'
    },
    {
     icon: '/images/building-svgrepo-com.svg',
      title: 'Construction',
      description: 'Delivering expert support that keeps your operations moving.',
      color: '#2C3E50',
      link: '/construction'
    },    
    {
     icon: '/images/arrow-up-house-svgrepo-com.svg',
      title: 'Property Management',
      description: 'End-to-end property administration ensuring operational excellence.',
      color: '#2C3E50',
      link: '/property'
    },
    {
        icon: '/images/chart-column-grow-svgrepo-com.svg',
      title: 'Investment Opportunities',
      description: 'Strategic partnerships in real estate and infrastructure development.',
      color: '#2C3E50',
      link: '/investment'
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/about.jpg"
              alt="Construction Professional"
              className={styles.image}
            />
            <div className={styles.experienceBadge}>
              
              <div className={styles.badgeNumber}>10</div>
              <div className={styles.badgeText}>
                Years of experience
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.textContent}>
            <div className={styles.subtitle}>Welcome to AWK Corporation</div>
            <h1 className={styles.mainTitle}>Infrastructure Excellence, Delivered</h1>
            <p className={styles.description}>
              We simplify infrastructure, construction, and procurement through careful 
              planning and precise execution. Operating across North America, 
              our collaborative approach ensures transparency, safety, and projects built 
              to last-always aligned with your vision..
            </p>

            <h3 className={styles.subheading}>How We Support Your Success</h3>

            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className={styles.serviceItem}
                  style={{
                    backgroundColor: hoveredService === index ? service.color : '#f8f9fa'
                  }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                 <div
  className={styles.serviceIcon}
  style={{
    color: hoveredService === index ? 'white' : service.color
  }}
>
  {service.icon.startsWith('/') ? (
    <img 
      src={service.icon} 
      alt={service.title}
      style={{
        filter: hoveredService === index 
          ? 'brightness(0) invert(1) brightness(2)' 
          : 'none'
      }}
    />
  ) : (
    service.icon
  )}
</div>
                  <div className={styles.serviceText}>
                    <h4
                      className={styles.serviceTitle}
                      style={{
                        color: hoveredService === index ? 'white' : '#2C3E50'
                      }}
                    >
                      {service.title}
                    </h4>
                    <p
                      className={styles.serviceDescription}
                      style={{
                        color: hoveredService === index ? 'rgba(255,255,255,0.95)' : '#666'
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div 
                    className={styles.serviceArrow}
                    style={{
                      color: hoveredService === index ? 'white' : '#FF9800'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}