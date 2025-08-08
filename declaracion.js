document.addEventListener('DOMContentLoaded', () => {
    const declaraciones = document.querySelectorAll('.declaracion');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    declaraciones.forEach(declaracion => {
      observer.observe(declaracion);
    });
  });