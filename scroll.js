const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.scroll-animate').forEach(el => scrollObserver.observe(el));

function revealSocialLinks() {
  document.querySelector('.social-links').classList.add('in-view');
  window.removeEventListener('scroll', revealSocialLinks);
}

window.addEventListener('scroll', revealSocialLinks);