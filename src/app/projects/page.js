'use client';
import { useEffect } from 'react';
import Header from '../../components/Header';
import Projects from '../projects/Projects';
import ProjectOld from '../../components/Projects';
import WorkingUs from '../../components/WorkingUs';
import Footer from '../../components/Footer';
export default function AboutPage() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
         <Header />
       <Projects />
        <ProjectOld />
                     <WorkingUs />
           <Footer />
    </>
  );
}