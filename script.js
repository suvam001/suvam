// Smooth scroll to section when clicking on nav links
$(document).ready(function() {
  $('nav a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    }
  });
});

// Show project descriptions when hovering over project links
$(document).ready(function() {
  $('.project a').hover(
    function() {
      $(this).siblings('.description').fadeIn(400);
    }, function() {
      $(this).siblings('.description').fadeOut(400);
    }
  );
});

const contactButton = document.querySelector('.contact-button');

contactButton.addEventListener('click', () => {
  window.location.href = 'mailto:your-email@example.com';
});
