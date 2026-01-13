// WhatsApp form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const help = document.getElementById('help').value;

  const message = `Hello Granite Masters Company,%0A%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Phone: ${phone}%0A` +
    `Request: ${help}`;

  const whatsappNumber = "265888972244";
  const url = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(url, '_blank');
});

// Lightbox functionality
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryImages.forEach(img => {
  img.addEventListener('click', function() {
    lightbox.style.display = 'flex';
    lightboxImg.src = this.src;
  });
});

lightbox.addEventListener('click', function() {
  lightbox.style.display = 'none';
});
