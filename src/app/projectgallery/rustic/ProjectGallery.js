'use client';

import { useState, useEffect } from 'react';
import styles from './ProjectGallery.module.css';
import Image from 'next/image';

export default function ProjectGallery() {
  // Sample project data - you can replace this with props or API data
  const projectData = {
    title: "General Home Renovation",
    location: "Alberta",
    year: "2024",
    description: "This home renovation project includes drywall installation and finishing, custom countertop replacement, and structural framing updates. The goal is to modernize interior spaces while enhancing structural integrity and aesthetic appeal throughout the home.",
    features: [
      "Drywall installation and finishing",
      "Custom countertop replacement", 
      "Structural framing updates",
      "Modern interior design",
      "Energy-efficient upgrades"
    ],
    images: [
      { id: 1, src: "/images/projects/residential/1.jpg", alt: "Living room renovation", category: "interior" },
      { id: 2, src: "/images/projects/residential/2.jpg", alt: "Kitchen countertops", category: "kitchen" },
      { id: 3, src: "/images/projects/residential/3.jpg", alt: "Structural framing", category: "structural" },
      { id: 4, src: "/images/projects/residential/4.jpg", alt: "Drywall finishing", category: "interior" },
      { id: 5, src: "/images/projects/residential/5.jpg", alt: "Bathroom remodel", category: "bathroom" },
      { id: 6, src: "/images/projects/residential/6.jpg", alt: "Final living room", category: "interior" },
      { id: 7, src: "/images/projects/residential/7.jpg", alt: "Exterior update", category: "exterior" },
      { id: 8, src: "/images/projects/residential/8.jpg", alt: "Custom cabinetry", category: "kitchen" },
    ],
    categories: ["all", "interior", "kitchen", "bathroom", "structural", "exterior"]
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