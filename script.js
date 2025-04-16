// Get all sections and navigation links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

// Function to update active link
function updateActiveLink() {
    const scrollPosition = window.scrollY + 100; // Offset for better accuracy

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to current section's link
            const currentLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (currentLink) {
                currentLink.classList.add('active');
            }
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', updateActiveLink);

// Add click event listeners for smooth scrolling
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Initial call to set active link on page load
updateActiveLink(); 