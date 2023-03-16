const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    const topOffset = target.offsetTop;

    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });
  });
});
