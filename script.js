document.addEventListener("DOMContentLoaded", function() {
    
    // Smooth navigation fade effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        }
    });

    // Friendly time-of-day greeting generator
    const greetingContainer = document.getElementById('dynamic-greeting');
    if (greetingContainer) {
        const currentHour = new Date().getHours();
        let greetingText = "";

        if (currentHour < 12) {
            greetingText = "Godmorgen! Thanks for stopping by early—have a wonderful day ahead.";
        } else if (currentHour < 18) {
            greetingText = "Hej! Thanks for taking a look at my profile this afternoon.";
        } else {
            greetingText = "God aften! Thanks for checking out my portfolio this evening.";
        }

        greetingContainer.textContent = greetingText;
    }
});