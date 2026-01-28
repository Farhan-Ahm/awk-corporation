'use client';
import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const servicesRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Close services dropdown when closing main menu
    if (menuOpen) {
      setServicesOpen(false);
    }
  };

  const toggleServices = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setServicesOpen(!servicesOpen);
  };

  const isActive = (path) => {
    // Handle exact match for HOME
    if (path === '/') {
      return pathname === '/' || pathname === '';
    }
    // For other pages, check if pathname starts with the path
    return pathname.startsWith(path);
  };

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { 
      name: 'SERVICES', 
      path: '/services',
      hasDropdown: true,
      subItems: [
        { name: 'Engineering', path: '/engineering' },
        { name: 'Construction', path: '/construction' },
        { name: 'Property Management', path: '/property' },
        { name: 'Investment Opportunity', path: '/investment' },
      ]
    },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT', path: '/contact' },
  ];

  // Handle link click for mobile
  const handleLinkClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  // FIXED: Services should navigate to /services page on mobile, not toggle dropdown
  const handleServicesClick = (e) => {
    // Let the Link component handle navigation on both mobile and desktop
    // Close the mobile menu after clicking
    handleLinkClick();
  };

  // Handle dropdown arrow click to toggle dropdown on mobile
  const handleDropdownArrowClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setServicesOpen(!servicesOpen);
  };

  // Close services dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    if (servicesOpen && typeof window !== 'undefined' && window.innerWidth > 992) {
      document.addEventListener('mousedown', handleClickOutside);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [servicesOpen]);

  // Auto-close dropdown on mobile when clicking outside
  useEffect(() => {
    const handleMobileClickOutside = (event) => {
      if (menuOpen && typeof window !== 'undefined' && window.innerWidth <= 992) {
        if (!event.target.closest(`.${styles.navMenu}`) && 
            !event.target.closest(`.${styles.menuToggle}`)) {
          setMenuOpen(false);
          setServicesOpen(false);
        }
      }
    };

    document.addEventListener('click', handleMobileClickOutside);
    return () => {
      document.removeEventListener('click', handleMobileClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.topBarLeft}>
              <span className={styles.topBarItem}>
                <strong>Free Call:</strong>{' '}
                <a href="tel:+14034975725">(403) 497-5725</a>
              </span>
            </div>
            <div className={styles.topBarRight}>
              <span className={styles.topBarItem}>
                <strong>Email Address:</strong>{' '}
                <a href="mailto:technicalservices@awkcorporation.com">technicalservices@awkcorporation.com</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.mainNav}>
        <div className={styles.navWrapper}>
          
            <Link href="/" className={styles.brandSection}>
            <img 
              src="/images/awk_logo.png" 
              alt="AWK Corporation Logo" 
              className={styles.logo}
            />
            <div className={styles.navbarBrand}>AWK CORPORATION</div>
          </Link>
         
          
          {/* Hamburger Menu Button with animation class */}
          <button 
            className={`${styles.menuToggle} ${menuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Menu */}
          <ul className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ''}`}>
            {navItems.map((item) => (
              <li 
                key={item.path} 
                className={item.hasDropdown ? styles.hasDropdown : ''}
                ref={item.hasDropdown ? servicesRef : null}
                onMouseEnter={() => {
                  if (item.hasDropdown && typeof window !== 'undefined' && window.innerWidth > 992) {
                    setServicesOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (item.hasDropdown && typeof window !== 'undefined' && window.innerWidth > 992) {
                    setServicesOpen(false);
                  }
                }}
              >
                {item.hasDropdown ? (
                  <>
                    <Link
                      href={item.path}
                      className={`${isActive(item.path) ? styles.active : ''} ${styles.dropdownToggle}`}
                      onClick={handleServicesClick}
                    >
                      {item.name}
                      <span 
                        className={`${styles.dropdownArrow} ${servicesOpen ? styles.open : ''}`}
                        onClick={handleDropdownArrowClick}
                      >
                        ▼
                      </span>
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <ul className={`${styles.dropdown} ${servicesOpen ? styles.dropdownOpen : ''}`}>
                      {item.subItems.map((subItem) => (
                        <li key={subItem.path}>
                          <Link
                            href={subItem.path}
                            className={isActive(subItem.path) ? styles.activeSubItem : ''}
                            onClick={handleLinkClick}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={isActive(item.path) ? styles.active : ''}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}