//Appointment.js
'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Appointment.module.css';
import Link from 'next/link';

export default function Appointment() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    projectSize: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    budget: '',
    projectDescription: '',
    howDidYouHear: '',
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const formRef = useRef(null);

  // Project types for dropdown
  const projectTypes = [
    'General Construction',
    'Commercial Renovation',
    'Residential Building',
    'Industrial Warehouse',
    'Infrastructure Development',
    'Steel Framing',
    'Property Management',
    'Engineering Consultation',
    'Procurement Services',
    'Other'
  ];

  // Project sizes for dropdown
  const projectSizes = [
    'Small (Under $100,000)',
    'Medium ($100,000 - $500,000)',
    'Large ($500,000 - $2M)',
    'Major (Over $2M)',
    'Not Sure'
  ];

  // Time slots for dropdown
  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  // How did you hear options
  const hearAboutUs = [
    'Google Search',
    'Referral',
    'Social Media',
    'Previous Client',
    'Industry Event',
    'Website',
    'Advertisement',
    'Other'
  ];

  // Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Auto-clear success messages
  useEffect(() => {
    if (submitStatus?.type === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Project type validation
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    // Project description validation
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Project description is required';
    } else if (formData.projectDescription.trim().length < 20) {
      newErrors.projectDescription = 'Please provide more details (minimum 20 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    if (!recaptchaLoaded) {
      setSubmitStatus({
        type: 'error',
        message: 'reCAPTCHA is still loading. Please try again.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Execute reCAPTCHA
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: 'appointment' }
      );

      // Submit form
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Appointment request submitted successfully! Our team will contact you within 24 hours to confirm.',
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          projectType: '',
          projectSize: '',
          preferredDate: '',
          preferredTime: '',
          location: '',
          budget: '',
          projectDescription: '',
          howDidYouHear: '',
          newsletter: false
        });

        // Scroll to success message
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to submit appointment request. Please try again.',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className={styles.appointmentHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumbWrapper}>
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
                <li className={`${styles.breadcrumbItem} ${styles.active}`}>
                  <span className={styles.breadcrumbCurrent}>Book Appointment</span>
                </li>
              </ol>
            </nav>
          </div>

          <h1 className={styles.heroTitle}>BOOK YOUR CONSULTATION</h1>
          <p className={styles.heroBreadcrumb}>
            Lets discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Appointment Section */}
      <section className={styles.appointmentSection}>
        <div className="container">
          <div className="row">
            {/* Appointment Information */}
            <div className="col-lg-4 mb-4 scroll-animate">
              <div className={styles.appointmentInfo}>
                {/*<div className={styles.sectionLabel}>STRATEGIC PLANNING</div>*/}
                <h2 className={styles.appointmentTitle}>
                  Schedule Your Project Consultation
                </h2>
                <p className={styles.appointmentDescription}>
                  At AWK Corporation, we deliver infrastructure, construction, 
                  and procurement projects through smart planning and precise 
                  execution across North America—ensuring safe, transparent, 
                  and high-quality results aligned with your goals.
                </p>

                <div className={styles.infoCards}>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className={styles.infoContent}>
                      <h4>North America Coverage</h4>
                      <p>Serving clients across Canada and the United States</p>
                    </div>
                  </div>

                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div className={styles.infoContent}>
                      <h4>Fast Response</h4>
                      <p>We respond to appointment requests within 24 hours</p>
                    </div>
                  </div>

                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div className={styles.infoContent}>
                      <h4>Expert Consultation</h4>
                      <p>Free initial consultation for all project types</p>
                    </div>
                  </div>

                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div className={styles.infoContent}>
                      <h4>Team Approach</h4>
                      <p>Collaborative planning with our expert team</p>
                    </div>
                  </div>
                </div>

                <div className={styles.contactDetails}>
                  <h3>Prefer to Call?</h3>
                  <p>Call us directly to schedule your appointment:</p>
                  <div className={styles.contactItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>(403) 497-5725</span>
                  </div>
                  <div className={styles.contactItem}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>technicalservices@awkcorporation.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="col-lg-8 scroll-animate">
              <div className={styles.formWrapper} ref={formRef}>
                <form onSubmit={handleSubmit} className={styles.appointmentForm}>
                  {/* Status Messages */}
                  {submitStatus && (
                    <div
                      className={`${styles.statusMessage} ${
                        submitStatus.type === 'success'
                          ? styles.successMessage
                          : styles.errorMessage
                      }`}
                    >
                      <div className={styles.statusIcon}>
                        {submitStatus.type === 'success' ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={styles.successIcon}
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={styles.errorIcon}
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                          </svg>
                        )}
                      </div>
                      <p>{submitStatus.message}</p>
                    </div>
                  )}

                  <div className={styles.formRow}>
                    {/* First Name */}
                    <div className={styles.formGroup}>
                      <label htmlFor="firstName" className={styles.formLabel}>
                        First Name <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`${styles.formInput} ${
                          errors.firstName ? styles.inputError : ''
                        }`}
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <span className={styles.errorText}>{errors.firstName}</span>
                      )}
                    </div>

                    {/* Last Name */}
                    <div className={styles.formGroup}>
                      <label htmlFor="lastName" className={styles.formLabel}>
                        Last Name <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`${styles.formInput} ${
                          errors.lastName ? styles.inputError : ''
                        }`}
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <span className={styles.errorText}>{errors.lastName}</span>
                      )}
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    {/* Company */}
                    <div className={styles.formGroup}>
                      <label htmlFor="company" className={styles.formLabel}>
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="Your Company Name"
                      />
                    </div>

                    {/* Email */}
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        Email Address <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${styles.formInput} ${
                          errors.email ? styles.inputError : ''
                        }`}
                        placeholder="john.doe@company.com"
                      />
                      {errors.email && (
                        <span className={styles.errorText}>{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    {/* Phone */}
                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.formLabel}>
                        Phone Number <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`${styles.formInput} ${
                          errors.phone ? styles.inputError : ''
                        }`}
                        placeholder="(403) 555-0123"
                      />
                      {errors.phone && (
                        <span className={styles.errorText}>{errors.phone}</span>
                      )}
                    </div>

                    {/* Project Type */}
                    <div className={styles.formGroup}>
                      <label htmlFor="projectType" className={styles.formLabel}>
                        Project Type <span className={styles.required}>*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={`${styles.formInput} ${styles.formSelect} ${
                          errors.projectType ? styles.inputError : ''
                        }`}
                      >
                        <option value="">Select Project Type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <span className={styles.errorText}>{errors.projectType}</span>
                      )}
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    {/* Project Size */}
                    <div className={styles.formGroup}>
                      <label htmlFor="projectSize" className={styles.formLabel}>
                        Estimated Project Size
                      </label>
                      <select
                        id="projectSize"
                        name="projectSize"
                        value={formData.projectSize}
                        onChange={handleChange}
                        className={`${styles.formInput} ${styles.formSelect}`}
                      >
                        <option value="">Select Project Size</option>
                        {projectSizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Location */}
                    <div className={styles.formGroup}>
                      <label htmlFor="location" className={styles.formLabel}>
                        Project Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="City, Province/State"
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    {/* Preferred Date */}
                    <div className={styles.formGroup}>
                      <label htmlFor="preferredDate" className={styles.formLabel}>
                        Preferred Consultation Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className={`${styles.formInput} ${styles.formDate}`}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    {/* Preferred Time */}
                    <div className={styles.formGroup}>
                      <label htmlFor="preferredTime" className={styles.formLabel}>
                        Preferred Time Slot
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className={`${styles.formInput} ${styles.formSelect}`}
                      >
                        <option value="">Select Time Slot</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className={styles.formGroup}>
                    <label htmlFor="budget" className={styles.formLabel}>
                      Estimated Budget (Optional)
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={styles.formInput}
                      placeholder="e.g., $250,000 - $500,000"
                    />
                  </div>

                  {/* How Did You Hear */}
                  <div className={styles.formGroup}>
                    <label htmlFor="howDidYouHear" className={styles.formLabel}>
                      How did you hear about us?
                    </label>
                    <select
                      id="howDidYouHear"
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleChange}
                      className={`${styles.formInput} ${styles.formSelect}`}
                    >
                      <option value="">Select an option</option>
                      {hearAboutUs.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Description */}
                  <div className={styles.formGroup}>
                    <label htmlFor="projectDescription" className={styles.formLabel}>
                      Project Description <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      className={`${styles.formInput} ${styles.formTextarea} ${
                        errors.projectDescription ? styles.inputError : ''
                      }`}
                      placeholder="Please describe your project in detail, including your goals, timeline, and any specific requirements..."
                      rows="6"
                    ></textarea>
                    {errors.projectDescription && (
                      <span className={styles.errorText}>{errors.projectDescription}</span>
                    )}
                  </div>

                  {/* Newsletter Subscription */}
                 {/* <div className={styles.checkboxGroup}>
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className={styles.checkboxInput}
                    />
                    <label htmlFor="newsletter" className={styles.checkboxLabel}>
                      Sign up for our newsletter to receive project insights, industry updates, and company news.
                    </label>
                  </div>*/}

                  {/* reCAPTCHA Notice */}
                  <div className={styles.recaptchaNotice}>
                    <p>
                      This site is protected by reCAPTCHA and the Google{' '}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms of Service
                      </a>{' '}
                      apply.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className={styles.spinner}></span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        Schedule Consultation
                      </>
                    )}
                  </button>

                  {/*<div className={styles.privacyNote}>
                    <p>
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                      </a>
                      . We respect your privacy and will not share your information with third parties.
                    </p>
                  </div>*/}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}