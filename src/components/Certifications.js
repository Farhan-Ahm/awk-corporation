'use client';
import styles from './Certifications.module.css';

export default function Certifications() {
  const certifications = [
    {
      name: 'Alberta Construction Association',
      logo: '/images/certifications/ab_construction_assoc.gif',
      alt: 'Alberta Construction Association'
    },
    {
      name: 'APEGA Permit Holder',
      logo: '/images/certifications/ApegaPermitLogoWithPadding.jpg',
      alt: 'APEGA Permit Holder'
    },
    {
      name: 'COR Certificate of Recognition',
      logo: '/images/certifications/COR-Workplace-Safety.png',
      alt: 'COR Certificate of Recognition'
    },
    {
      name: 'WCB Worker Compensation Board',
      logo: '/images/certifications/WCB-Alberta-Logo.jpg',
      alt: 'WCB Worker Compensation Board'
    },
    {
      name: 'Appruv',
      logo: '/images/certifications/appruv-500.png',
      alt: 'Appruv'
    }
  ];

  // Duplicate the certifications array for seamless loop
  const duplicatedCertifications = [...certifications, ...certifications];

  return (
    <section className={styles.certificationsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Certifications & Compliance</h2>
        
        <div className={styles.scrollContainer}>
          <div className={styles.scrollTrack}>
            {duplicatedCertifications.map((cert, index) => (
              <div key={index} className={styles.certificationCard}>
                <img 
                  src={cert.logo} 
                  alt={cert.alt}
                  className={styles.certificationLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}