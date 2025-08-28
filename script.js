document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('.underline').style.width = '90%';
      } else {
        entry.target.querySelector('.underline').style.width = '10%';
      }
    });
  }, {
    threshold: 0.5
  });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});
