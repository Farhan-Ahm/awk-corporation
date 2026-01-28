'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Projects.module.css';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    { 
      img: '/images/projects/residential/10.jpg', 
      title: 'Rustic to Refined',
      link: '/projectgallery/rustic'
    },
    { 
      img: '/images/projects/commercial/7.jpg', 
      title: 'MedSpace Upgrade',
      link: '/projectgallery/medspace'
    },
    { 
      img: '/images/projects/irongrid/5.png', 
      title: 'IronGrid Construction',
      link: '/projectgallery/irongrid'
    },
    { 
      img: '/images/projects/wonderkids/3.png', 
      title: 'WonderKids Development Center',
      link: '/projectgallery/wonderkids'
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <div className="text-center mb-5 scroll-animate">
          <div className="section-subtitle">OUR PORTFOLIO</div>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-md-6 scroll-animate"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={styles.projectCard}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img src={project.img} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <h4>{project.title}</h4>
                  <Link href={project.link}>
                    <button>Learn More →</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}