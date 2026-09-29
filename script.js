document.addEventListener("DOMContentLoaded", () => {
  const links = [...document.querySelectorAll('.toc a')];
  const targets = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(a => a.removeAttribute('aria-current'));
        const active = document.querySelector(`.toc a[href="#${entry.target.id}"]`);
        if (active) active.setAttribute('aria-current','true');
      }
    });
  }, {rootMargin:"-20% 0px -70% 0px"});
  targets.forEach(t => observer.observe(t));
});