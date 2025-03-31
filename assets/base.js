// Simple JavaScript to make the navigation links smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links that point to sections
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Scroll smoothly to the target
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to the current navigation item
    function highlightCurrentSection() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('nav ul li a');

        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    }

    // Call the function on scroll
    window.addEventListener('scroll', highlightCurrentSection);
});

// Modal functionality
const modal = document.getElementById('deliveryModal');
const btn = document.querySelector('.delivery-info-btn');
const closeBtn = document.querySelector('.close-modal');

// Open modal
btn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    updateCountdown(); // Start countdown when modal opens
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Countdown Timer functionality
function updateCountdown() {
    const now = new Date();
    let deadline = new Date(now);
    deadline.setHours(15, 0, 0, 0);

    // If it's weekend, show the weekend message
    if (isWeekend()) {
        document.getElementById('countdownTimer').style.display = 'none';
        document.getElementById('deliveryMessage').textContent = 
            "Bestil inden kl. 15 på hverdage, og få din ordre sendt afsted samme dag.";
        return;
    }

    // Handle different time periods
    const currentHour = now.getHours();
    const messageElement = document.getElementById('deliveryMessage');
    const timerElement = document.getElementById('countdownTimer');

    if (currentHour < 8) {
        // Before 08:00
        timerElement.style.display = 'none';
        messageElement.textContent = "Vores pakkeshop åbner kl. 08:00 🌅";
        return;
    } else if (currentHour >= 15) {
        // After 15:00
        timerElement.style.display = 'none';
        messageElement.textContent = "Dagens forsendelser er afsendt. Bestil inden kl. 15 i morgen, og få din ordre sendt afsted samme dag 📦";
        return;
    }

    // Between 08:00 and 15:00 - show countdown
    timerElement.style.display = 'inline';
    
    // Calculate remaining time
    const timeLeft = deadline - now;
    
    // Convert to hours, minutes, seconds
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the display
    timerElement.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Update message based on time remaining
    if (timeLeft <= 1800000) { // Less than 30 minutes
        messageElement.textContent = "Skynd dig! Bestil nu for at få din ordre afsendt i dag 🏃‍♂️";
    } else {
        messageElement.textContent = "Bestil inden kl. 15 i dag, og få din ordre sendt afsted samme dag 🚚";
    }

    // Continue updating if we're within the countdown period
    if (timeLeft > 0 && currentHour >= 8 && currentHour < 15) {
        requestAnimationFrame(updateCountdown);
    }
}

// Helper function to check if it's weekend
function isWeekend() {
    const day = new Date().getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
}
