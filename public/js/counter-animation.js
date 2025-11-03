// Counter Animation for About Us Section
document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.counter');
  
  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  };
  
  // Intersection Observer to trigger animation when in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        if (!counter.classList.contains('animated')) {
          counter.classList.add('animated');
          animateCounter(counter);
        }
      }
    });
  }, {
    threshold: 0.5
  });
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
});
