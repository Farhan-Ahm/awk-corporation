'use client';

import { useState, useEffect } from 'react';
import styles from './ProjectGallery.module.css';
import Image from 'next/image';
import Link from 'next/link'; // Make sure to import Link

export default function ProjectGallery() {
  // Sample project data - you can replace this with props or API data
  const projectData = {
    title: "Commercial Property Upgrade - Physician Clinic Modernization",
    location: "Saskatoon",
    year: "2025",
    description: "This commercial renovation project focuses on the full modernization of a physician clinic to improve functionality, patient experience, and overall aesthetics. The scope includes new flooring and tile installation, structural framing, architectural upgrades, interior decoration, custom cabinetry, and modern finishes. Exterior work covers siding replacement, roofing enhancements, and new door installations. A comprehensive security surveillance system will also be integrated to ensure safety and regulatory compliance. The renovation aims to create a professional, welcoming, and efficient clinical environment for both patients and staff.",
    features: [
      "New flooring and tile installation",
      "Structural framing updates",
      "Architectural upgrades",
      "Interior decoration & design",
      "Custom cabinetry installation",
      "Modern finishes throughout",
      "Siding replacement",
      "Roofing enhancements",
      "New door installations",
      "Security surveillance integration"
    ],
    images: [
      { 
        id: 1, 
        src: "/images/projects/commercial/1.jpg", 
        alt: "AWK Corporation physician clinic reception area renovation with modern seating",
        category: "interior" 
      },
      { 
        id: 2, 
        src: "/images/projects/commercial/2.jpg", 
        alt: "AWK Corporation medical examination room with new cabinetry and equipment",
        category: "medical" 
      },
      { 
        id: 3, 
        src: "/images/projects/commercial/3.jpg", 
        alt: "AWK Corporation commercial building exterior with new siding and doors",
        category: "exterior" 
      },
      { 
        id: 4, 
        src: "/images/projects/commercial/4.jpg", 
        alt: "AWK Corporation structural framing work for clinic interior walls",
        category: "structural" 
      },
      { 
        id: 5, 
        src: "/images/projects/commercial/5.jpg", 
        alt: "AWK Corporation flooring installation with modern tiles in clinic",
        category: "flooring" 
      },
      { 
        id: 6, 
        src: "/images/projects/commercial/6.jpg", 
        alt: "AWK Corporation custom cabinetry installation in medical storage area",
        category: "cabinetry" 
      },
      { 
        id: 7, 
        src: "/images/projects/commercial/7.jpg", 
        alt: "AWK Corporation security camera installation for clinic surveillance system",
        category: "security" 
      }
    ],
    categories: ["all", "exterior", "interior", "structural", "medical", "security", "flooring", "cabinetry"]
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [filteredImages, setFilteredImages] = useState(projectData.images);

  // Filter images based on category
  useEffect(() => {
    if (filter === 'all') {
      setFilteredImages(projectData.images);
    } else {
      setFilteredImages(projectData.images.filter(img => img.category === filter));
    }
  }, [filter]);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const goToPrev = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className={styles.projectGallery}>
      {/* ===== BREADCRUMB SECTION WITHOUT HERO ===== */}
      <section className={styles.pageBreadcrumb}>
        <div className="container">
          <div className={styles.breadcrumbContainer}>
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
                  <Link href="/projects" className={styles.breadcrumbLink}>
                    <span>Projects</span>
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
                  <span className={styles.breadcrumbCurrent}>
                    {projectData.title}
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* ===== END BREADCRUMB SECTION ===== */}

      {/* Project Header */}
      <div className={styles.projectHeader}>
        <div className={styles.projectMeta}>
          <span className={styles.location}><i className="bi bi-geo-alt"></i> {projectData.location}</span>
          <span className={styles.year}><i className="bi bi-calendar"></i> {projectData.year}</span>
        </div>
        
        <h1 className={styles.projectTitle}>{projectData.title}</h1>
        
        <p className={styles.projectDescription}>{projectData.description}</p>
        
        <div className={styles.projectFeatures}>
          <h3><i className="bi bi-check-circle"></i> Project Features</h3>
          <div className={styles.featuresGrid}>
            {projectData.features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <i className="bi bi-check-lg"></i>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className={styles.gallerySection}>
        <div className={styles.galleryHeader}>
          <h2 className={styles.galleryTitle}>
            <i className="bi bi-images"></i> Project Gallery
          </h2>
          
          {/* Filter Buttons */}
          <div className={styles.filterButtons}>
            {projectData.categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterBtn} ${filter === category ? styles.active : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
                {filter === category && <span className={styles.filterIndicator}></span>}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className={styles.imageGrid}>
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className={`${styles.imageItem} ${styles[image.category]}`}
              onClick={() => openLightbox(image)}
              data-aos="fade-up"
              data-aos-delay={(image.id % 4) * 100}
            >
              <div className={styles.imageWrapper}>
                {/* Replace with Next.js Image component for production */}
                <div className={styles.imagePlaceholder}>
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className={styles.galleryImage}
                    loading="lazy"
                  />
                </div>
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <i className="bi bi-zoom-in"></i>
                    <span className={styles.imageCategory}>
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className={styles.emptyState}>
            <i className="bi bi-image"></i>
            <p>No images found for this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className={styles.lightbox}>
          <div className={styles.lightboxOverlay} onClick={closeLightbox}></div>
          
          <div className={styles.lightboxContent}>
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              <i className="bi bi-x-lg"></i>
            </button>
            
            <button className={styles.lightboxNav} onClick={goToPrev}>
              <i className="bi bi-chevron-left"></i>
            </button>
            
            <div className={styles.lightboxImageContainer}>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className={styles.lightboxImage}
              />
              <div className={styles.lightboxInfo}>
                <h3>{selectedImage.alt}</h3>
                <span className={styles.lightboxCategory}>
                  {selectedImage.category}
                </span>
              </div>
            </div>
            
            <button className={styles.lightboxNav} onClick={goToNext}>
              <i className="bi bi-chevron-right"></i>
            </button>
            
            <div className={styles.lightboxCounter}>
              {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Project Stats */}
      <div className={styles.projectStats}>
        <div className={styles.statItem}>
          <i className="bi bi-camera"></i>
          <h3>{projectData.images.length}</h3>
          <p>Photos</p>
        </div>
        <div className={styles.statItem}>
          <i className="bi bi-clock"></i>
          <h3>3 Months</h3>
          <p>Duration</p>
        </div>
        <div className={styles.statItem}>
          <i className="bi bi-house-check"></i>
          <h3>100%</h3>
          <p>Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
}