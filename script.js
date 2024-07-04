// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add fade-in class when about section is scrolled into view
function fadeInAboutSection() {
    const aboutSection = document.getElementById('about');
    if (isInViewport(aboutSection)) {
        aboutSection.classList.add('fade-in');
    }
}

// Event listener to trigger fade-in effect on scroll
window.addEventListener('scroll', fadeInAboutSection);

// Initial check on page load
fadeInAboutSection();



// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class when portfolio items are scrolled into view
function animatePortfolioItems() {
    const portfolioItems = document.querySelectorAll('.portfolioContent');
    portfolioItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('fade-in', 'bounce'); // Add desired animation classes here
        }
    });
}

// Event listener to trigger animation on scroll
window.addEventListener('scroll', animatePortfolioItems);

// Initial check on page load
animatePortfolioItems();

