import styles from './Locations.module.css';

// OPTION 1: Service Areas Banner (Simple & Clean)
export function LocationsBanner() {
  return (
    <section className={styles.locationsBanner}>
      <div className="container">
        <div className={styles.bannerContent}>
          <div className={styles.bannerTitle}>
            <span className={styles.subtitle}>SERVICE AREAS</span>
            <h3>Proudly Serving Across Canada</h3>
          </div>
          <div className={styles.locationsList}>
            <div className={styles.locationItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Calgary, Alberta</span>
            </div>
            <div className={styles.locationItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Saskatoon, Saskatchewan</span>
            </div>
            <div className={styles.locationItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Montreal, Quebec</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// OPTION 2: Location Cards (More Visual Impact)
export function LocationsCards() {
  const locations = [
    {
      city: 'Calgary',
      province: 'Alberta',
      icon: '🏔️',
      description: 'Serving the greater Calgary area and surrounding communities'
    },
    {
      city: 'Saskatoon',
      province: 'Saskatchewan',
      icon: '🌾',
      description: 'Comprehensive construction services across Saskatchewan'
    },
    {
      city: 'Montreal',
      province: 'Quebec',
      icon: '🏙️',
      description: 'Quality engineering solutions throughout Quebec'
    }
  ];

  return (
    <section className={styles.locationsCards}>
      <div className="container">
        <div className="text-center mb-5">
          <span className={styles.sectionSubtitle}>WHERE WE WORK</span>
          <h2 className={styles.sectionTitle}>Our Service Locations</h2>
        </div>
        <div className="row g-4">
          {locations.map((location, index) => (
            <div key={index} className="col-md-4">
              <div className={styles.locationCard}>
                <div className={styles.cardIcon}>{location.icon}</div>
                <h4>{location.city}</h4>
                <p className={styles.province}>{location.province}</p>
                <p className={styles.description}>{location.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// OPTION 3: Compact Inline List (Minimal Space)
export function LocationsInline() {
  return (
    <div className={styles.locationsInline}>
      <div className="container">
        <div className={styles.inlineContent}>
          <span className={styles.label}>Serving:</span>
          <div className={styles.locationTags}>
            <span className={styles.tag}>Calgary, AB</span>
            <span className={styles.divider}>•</span>
            <span className={styles.tag}>Saskatoon, SK</span>
            <span className={styles.divider}>•</span>
            <span className={styles.tag}>Montreal, QC</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// OPTION 4: Hero Section Addition (Below Main Hero Text)
export function LocationsHeroAddition() {
  return (
    <div className={styles.heroLocations}>
      <div className={styles.heroLocationsList}>
        <span className={styles.heroLabel}>Service Areas:</span>
        <div className={styles.heroItems}>
          <span>Calgary, AB</span>
          <span className={styles.heroDivider}>|</span>
          <span>Saskatoon, SK</span>
          <span className={styles.heroDivider}>|</span>
          <span>Montreal, QC</span>
        </div>
      </div>
    </div>
  );
}

// OPTION 5: Map-Style Section (Most Visual)
export function LocationsMap() {
  const locations = [
    { city: 'Calgary', province: 'Alberta', coords: { top: '52%', left: '28%' } },
    { city: 'Saskatoon', province: 'Saskatchewan', coords: { top: '48%', left: '38%' } },
    { city: 'Montreal', province: 'Quebec', coords: { top: '55%', left: '78%' } }
  ];

  return (
    <section className={styles.locationsMap}>
      <div className="container">
        <div className="text-center mb-5">
          <span className={styles.sectionSubtitle}>COAST TO COAST</span>
          <h2 className={styles.sectionTitle}>Serving Major Canadian Cities</h2>
        </div>
        <div className={styles.mapContainer}>
          <div className={styles.mapBackground}>
            {/* Canada Map SVG */}
            <svg className={styles.canadaSvg} viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg">
              {/* Simplified Canada outline */}
              <path
                d="M 50 200 Q 100 180, 150 200 L 200 180 L 250 200 Q 300 190, 350 200 L 400 190 L 450 200 Q 500 180, 550 200 L 600 190 L 650 200 Q 700 210, 750 200 L 800 210 L 850 200 Q 900 190, 950 200 L 950 350 Q 900 340, 850 350 L 800 340 L 750 350 Q 700 360, 650 350 L 600 360 L 550 350 Q 500 340, 450 350 L 400 340 L 350 350 Q 300 360, 250 350 L 200 360 L 150 350 Q 100 340, 50 350 Z"
                fill="#e2e8f0"
                stroke="#94a3b8"
                strokeWidth="2"
              />
              {/* Add some interior details for provinces */}
              <line x1="280" y1="200" x2="280" y2="350" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="380" y1="200" x2="380" y2="350" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="580" y1="200" x2="580" y2="350" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="720" y1="200" x2="720" y2="350" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" />
            </svg>
            
            {locations.map((location, index) => (
              <div
                key={index}
                className={styles.mapPin}
                style={{ top: location.coords.top, left: location.coords.left }}
              >
                <div className={styles.pinDot}></div>
                <div className={styles.pinLabel}>
                  <strong>{location.city}</strong>
                  <span>{location.province}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Default export - Choose one of the above
export default LocationsBanner;