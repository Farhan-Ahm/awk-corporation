'use client';

import { useState, useEffect } from 'react';
import styles from './ProjectGallery.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectGallery() {
  // Sample project data - you can replace this with props or API data
  const projectData = {
    title: "Steel Framing Construction for Industrial Warehouse",
    location: "Red Deer",
    year: "2025",
    description: "The Steel Framing Construction for Industrial Warehouse project was successfully completed, resulting in a strong, efficient, and code-compliant structural steel framework. The scope included the fabrication and erection of steel columns, beams, trusses, and bracing, tailored to support a modern industrial warehouse with wide clear spans and high load-bearing capacity. The project was delivered on time and within budget, with a strong focus on safety and coordination with other trades. The completed steel frame provides a durable foundation for all subsequent construction phases and supports future scalability and operational flexibility.",
    features: [
      "Steel column fabrication and installation",
      "Beam erection and connection",
      "Truss system construction",
      "Structural bracing installation",
      "Code-compliant steel framework",
      "Wide clear span design",
      "High load-bearing capacity",
      "Safety-focused construction",
      "Trade coordination management",
      "Future scalability support"
    ],
    images: [
      { 
        id: 1, 
        src: "/images/projects/irongrid/1.png", 
        alt: "AWK Corporation steel column installation for industrial warehouse framework",
        category: "structural" 
      },
      { 
        id: 2, 
        src: "/images/projects/irongrid/2.png", 
        alt: "AWK Corporation steel beam erection and connection process",
        category: "structural" 
      },
      { 
        id: 3, 
        src: "/images/projects/irongrid/3.png", 
        alt: "AWK Corporation steel truss system construction with wide clear spans",
        category: "truss" 
      },
      { 
        id: 4, 
        src: "/images/projects/irongrid/4.png", 
        alt: "AWK Corporation structural bracing installation for warehouse stability",
        category: "bracing" 
      },
      { 
        id: 5, 
        src: "/images/projects/irongrid/5.png", 
        alt: "AWK Corporation completed steel framework showing load-bearing capacity",
        category: "framework" 
      },
      { 
        id: 6, 
        src: "/images/projects/irongrid/6.png", 
        alt: "AWK Corporation safety-focused steel construction with proper equipment",
        category: "safety" 
      }
    ],
    categories: ["all", "structural", "truss", "bracing", "framework", "safety"]
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