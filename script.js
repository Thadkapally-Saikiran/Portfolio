// Select the element with the ID 'menu-icon' (e.g., a hamburger icon for mobile navigation)
const menuIcon = document.querySelector('#menu-icon');

// Select the element with the class 'nav-links' (e.g., the container for navigation links)
const navLinks = document.querySelector('.nav-links');

// Define an onclick event handler for the menuIcon element
menuIcon.onclick = () => {
    // Toggle the 'active' class on the navLinks element.
    // This is often used to show/hide the navigation menu in responsive designs.
    navLinks.classList.toggle('active');
}





// Select the contact form element
const contactForm = document.getElementById('contactForm');

// Listen for the submit event on the contact form
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the form data using EmailJS
    emailjs.sendForm('service_uugz2ig', 'template_2rmmpzp', this)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        contactForm.reset(); // Optionally, reset the form after successful submission
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message, please try again.');
    });
});

