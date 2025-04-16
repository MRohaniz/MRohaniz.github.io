// Wait for the DOM to be fully loaded before executing any JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animation for section entries using Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all elements with the animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach(section => {
    observer.observe(section);
  });
  
  // Sticky navigation functionality
  const nav = document.querySelector('nav');
  const navTop = nav.offsetTop;
  
  function handleScroll() {
    if (window.scrollY >= navTop) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      nav.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      nav.classList.remove('fixed-nav');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  
  // Add hover effects to experience items
  const experienceItems = document.querySelectorAll('.experience-item');
  experienceItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 3px 15px rgba(0,0,0,0.05)';
    });
  });
});
