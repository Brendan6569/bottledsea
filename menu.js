const menu = document.querySelector('#menu');

// Add a click event listener to the menu
menu.addEventListener('click', function(e) {
  // Prevent the default link behavior
  e.preventDefault();

  // Check if the clicked element is a link
  if (e.target.tagName === 'A') {
    // Remove the "active" class from all links
    const links = document.querySelectorAll('#menu a');
    links.forEach(function(link) {
      link.classList.remove('active');
    });

    // Add the "active" class to the clicked link
    e.target.classList.add('active');
  }
});