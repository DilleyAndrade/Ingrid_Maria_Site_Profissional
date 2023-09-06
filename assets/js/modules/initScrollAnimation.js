export function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowHalfScreen = window.innerHeight * 0.6;

  function animeScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowHalfScreen) < 0;
      if (isSectionVisible) {
        section.classList.add('active');
      }
    });
  }
  if (sections.length) {
    animeScroll();
    window.addEventListener('scroll', animeScroll);
  }
}