const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  const workCards = document.querySelectorAll('.card');
  
  workCards.forEach(card => {
    observer.observe(card);
  });
