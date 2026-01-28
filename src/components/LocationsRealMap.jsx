'use client';
import { useState } from 'react';
import styles from './LocationsRealMap.module.css';

// OPTION 1: Google Maps Embed (No API Key Required - EASIEST)
export function LocationsGoogleMapsEmbed() {
  return (
    <section className={styles.locationsSection}>
      <div className="container">
        <div className="text-center mb-5">
          <span className={styles.sectionSubtitle}>COAST TO COAST</span>
          <h2 className={styles.sectionTitle}>Serving Major Canadian Cities</h2>
        </div>
        
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1YOUR_MAP_ID&ehbc=2E312F"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AWK Corporation Service Locations"
          ></iframe>
        </div>
        
        <div className={styles.locationsList}>
          <div className={styles.locationCard}>
            <div className={styles.locationIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <h4>Calgary</h4>
              <p>Alberta</p>
            </div>
          </div>
          
          <div className={styles.locationCard}>
            <div className={styles.locationIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <h4>Saskatoon</h4>
              <p>Saskatchewan</p>
            </div>
          </div>
          
          <div className={styles.locationCard}>
            <div className={styles.locationIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <h4>Montreal</h4>
              <p>Quebec</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// OPTION 2: Simple iframe with multiple locations using Google Maps directions
export function LocationsSimpleMap() {
  const locations = [
    { name: 'Calgary, Alberta', lat: 51.0447, lng: -114.0719 },
    { name: 'Saskatoon, Saskatchewan', lat: 52.1332, lng: -106.6700 },
    { name: 'Montreal, Quebec', lat: 45.5017, lng: -73.5673 }
  ];

  // Create a map centered on Canada with markers
  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=56.1304,-106.3468&zoom=4&maptype=roadmap`;
  
  // Alternative: Use a static image approach
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Canada&zoom=4&size=1200x600&markers=color:red%7Clabel:C%7C51.0447,-114.0719&markers=color:red%7Clabel:S%7C52.1332,-106.6700&markers=color:red%7Clabel:M%7C45.5017,-73.5673&key=YOUR_API_KEY`;

  return (
    <section className={styles.locationsSection}>
      <div className="container">
        <div className="text-center mb-5">
          <span className={styles.sectionSubtitle}>COAST TO COAST</span>
          <h2 className={styles.sectionTitle}>Serving Major Canadian Cities</h2>
        </div>
        
        <div className={styles.mapWrapper}>
          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d9523815.99524993!2d-106.34679999999999!3d56.130366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB!3m2!1d51.0447331!2d-114.0718831!4m5!1s0x5304f6bf47ed992b%3A0x5049e3295772690!2sSaskatoon%2C%20SK!3m2!1d52.1332131!2d-106.67003939999999!4m5!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontr%C3%A9al%2C%20QC!3m2!1d45.5018869!2d-73.56739189999999!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className={styles.locationsList}>
          <div className={styles.locationCard}>
            <h4>🏔️ Calgary, Alberta</h4>
            <p>Comprehensive construction and engineering services</p>
          </div>
          <div className={styles.locationCard}>
            <h4>🌾 Saskatoon, Saskatchewan</h4>
            <p>Property management and investment solutions</p>
          </div>
          <div className={styles.locationCard}>
            <h4>🏙️ Montreal, Quebec</h4>
            <p>Full-service construction and development</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// OPTION 3: Leaflet Map (Open Source - No API Key Needed)
// NOTE: Requires installing leaflet: npm install leaflet react-leaflet
export function LocationsLeafletMap() {
  /* 
  To use this, first install:
  npm install leaflet react-leaflet
  
  Then uncomment the code below:
  
  import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
  import 'leaflet/dist/leaflet.css';
  import L from 'leaflet';

  // Fix marker icon issue
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/marker-icon-2x.png',
    iconUrl: '/marker-icon.png',
    shadowUrl: '/marker-shadow.png',
  });

  const locations = [
    { name: 'Calgary', province: 'Alberta', position: [51.0447, -114.0719] },
    { name: 'Saskatoon', province: 'Saskatchewan', position: [52.1332, -106.6700] },
    { name: 'Montreal', province: 'Quebec', position: [45.5017, -73.5673] }
  ];

  return (
    <section className={styles.locationsSection}>
      <div className="container">
        <div className="text-center mb-5">
          <span className={styles.sectionSubtitle}>COAST TO COAST</span>
          <h2 className={styles.sectionTitle}>Serving Major Canadian Cities</h2>
        </div>
        
        <div className={styles.mapWrapper}>
          <MapContainer 
            center={[56.1304, -106.3468]} 
            zoom={4} 
            style={{ height: '600px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, idx) => (
              <Marker key={idx} position={location.position}>
                <Popup>
                  <strong>{location.name}</strong><br />
                  {location.province}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
  */
  
  return (
    <div className={styles.locationsSection}>
      <div className="container text-center">
        <p>Install leaflet to use this option: npm install leaflet react-leaflet</p>
      </div>
    </div>
  );
}

// OPTION 4: Image-based map with hotspots
export function LocationsImageMap() {
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <section className={styles.locationsSection}>
      <div className="container">
        <div className="text-center mb-5">
          <span className={styles.sectionSubtitle}>COAST TO COAST</span>
          <h2 className={styles.sectionTitle}>Serving Major Canadian Cities</h2>
        </div>
        
        <div className={styles.imageMapWrapper}>
          {/* Use a Canada map image */}
          <img 
            src="/images/canada-map.png" 
            alt="Canada Map" 
            className={styles.mapImage}
          />
          
          {/* Clickable pins */}
          <div 
            className={styles.mapPin}
            style={{ top: '52%', left: '28%' }}
            onClick={() => setActiveLocation('calgary')}
          >
            <div className={styles.pinDot}></div>
            {activeLocation === 'calgary' && (
              <div className={styles.pinPopup}>
                <strong>Calgary, Alberta</strong>
                <p>Main office and operations</p>
              </div>
            )}
          </div>
          
          <div 
            className={styles.mapPin}
            style={{ top: '48%', left: '38%' }}
            onClick={() => setActiveLocation('saskatoon')}
          >
            <div className={styles.pinDot}></div>
            {activeLocation === 'saskatoon' && (
              <div className={styles.pinPopup}>
                <strong>Saskatoon, Saskatchewan</strong>
                <p>Regional services</p>
              </div>
            )}
          </div>
          
          <div 
            className={styles.mapPin}
            style={{ top: '55%', left: '78%' }}
            onClick={() => setActiveLocation('montreal')}
          >
            <div className={styles.pinDot}></div>
            {activeLocation === 'montreal' && (
              <div className={styles.pinPopup}>
                <strong>Montreal, Quebec</strong>
                <p>Eastern operations</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Default export - OPTION 2 (easiest to implement)
export default LocationsSimpleMap;