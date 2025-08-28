document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('.underline').style.width = '660px';
      } else {
        entry.target.querySelector('.underline').style.width = '60px';
      }
    });
  }, {
    threshold: 0.5
  });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});
