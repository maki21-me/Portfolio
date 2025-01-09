
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');
    const imageInput = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('imagePreview');

    form.onsubmit = function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            responseMessage.innerText = 'Thank you for reaching out, ' + name + '!';
            responseMessage.style.color = 'green';
            form.reset();
            imagePreview.src = '';
            imagePreview.style.display = 'none';
        } else {
            responseMessage.innerText = 'Please fill out all fields.';
            responseMessage.style.color = 'red';
        }
    };

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image upload and preview functionality
    imageInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });
});