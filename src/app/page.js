'use client';
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CTASection from '../components/CTASection';
import { LocationsBanner } from '../components/Locations';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
//import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
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
      <Hero />
      <Services />
      <CTASection />     
      <Certifications/>
       <LocationsBanner /> 
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}