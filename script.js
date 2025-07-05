document.addEventListener('DOMContentLoaded', function() {
    // --- 1. Smooth Scrolling for Internal Navigation ---
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });

            // CLOSE BURGER MENU AFTER CLICK (FOR MOBILE)
            const navToggle = document.getElementById('nav-toggle');
            if (navToggle && navToggle.checked) {
                navToggle.checked = false; // Uncheck the checkbox to close the menu
            }
        });
    });

    // --- 2. "Scrolled Header" Effect ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 3. Animate Elements on Scroll (Fade-In & Slide-Up) ---
    // Add CSS selectors for other HTML objects you want to apply this effect to.
    const animateOnScrollElements = document.querySelectorAll(
        'section h2, .skill-category, .project-card, .job-entry, .text-center.animate-on-scroll, .contact-section p.animate-on-scroll, .contact-section .contact-links a'
    );

    const observerOptions = {
        root: null, // Observing the viewport
        threshold: 0.1, // When 10% of the object is visible in the viewport
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Do not unobserve hidden project cards,
                // because we want them to be animated again when displayed.
                // Unobserve logic is moved to the toggle-projects-btn handler for hidden project cards
                if (!entry.target.closest('#additional-projects') || !entry.target.closest('#additional-projects').classList.contains('is-visible')) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    // Iterate through each element and start observing
    animateOnScrollElements.forEach(element => {
        element.classList.add('animate-on-scroll'); // Ensure the initial class is present
        observer.observe(element);
    });

    // --- 4. Simple Parallax Effect on Hero Section (Optional) ---
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = -scrollPosition * 0.2 + 'px';
        });
    }

    // --- 5. Counter Animation for Statistics (Optional) ---
    const counters = document.querySelectorAll('.animated-counter');
    const animationSpeed = 200;

    const animateCounter = (counterElement) => {
        const targetValue = +counterElement.getAttribute('data-target');
        let currentValue = 0;

        const updateCount = () => {
            const increment = targetValue / animationSpeed;
            if (currentValue < targetValue) {
                currentValue += increment;
                counterElement.innerText = Math.ceil(currentValue);
                setTimeout(updateCount, 1);
            } else {
                counterElement.innerText = targetValue;
            }
        };
        updateCount();
    };

    const counterObserverOptions = {
        root: null,
        threshold: 0.8
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, counterObserverOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // --- 6. Typed Text Effect for Subheading and Other Static Content ---
    const heroHeadingElement = document.querySelector('.typed-text-heading');
    const heroSubheadingElement = document.querySelector('.typed-text-subheading'); // This will be the typed element
    const heroParagraphElement = document.querySelector('.typed-text-paragraph');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroImage = document.querySelector('.hero-image');

    // Actual text content (CHANGE WITH YOUR MOST INTERESTING INFORMATION)
    const heroHeading = "Hello, I'm Rifqi Fauzi"; // This text will be static
    const heroSubheadingPhrases = [ // Phrases to be typed alternately
        "Software Engineer",
        "Network Engineer",
        "Web Developer",
        "UI/UX Designer",
        "Video Editor"
    ];
    const heroParagraph = "I am Rifqi Fauzi Anwar, an aspiring software and network engineer with a strong foundation in full-stack web development, 2D game programming in Java, and network configuration using Mikrotik. I am passionate about creating efficient, user-oriented digital solutions through clean design, structured code, and practical network integration. With hands-on experience in both frontend and backend development, as well as basic infrastructure setup, I am committed to delivering functional and innovative systems that meet real-world needs.";

    // Typing Speed and Delay
    const typingSpeed = 70;      // Typing speed
    const deletingSpeed = 40;    // Deleting speed
    const phraseDelay = 1500;    // Delay before typing the next phrase

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    // Set static text for Heading and Paragraph
    if (heroHeadingElement) {
        heroHeadingElement.textContent = heroHeading;
    }
    if (heroParagraphElement) {
        heroParagraphElement.textContent = heroParagraph;
    }

    // Function for typing effect on subheading
    function typeSubheading() {
        const currentPhrase = heroSubheadingPhrases[phraseIndex];

        if (isDeleting) {
            // Delete characters
            heroSubheadingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Type characters
            heroSubheadingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeDelay = typingSpeed;
        if (isDeleting) {
            typeDelay = deletingSpeed; // Faster when deleting
        }

        // If finished typing one phrase
        if (!isDeleting && charIndex === currentPhrase.length) {
            typeDelay = phraseDelay; // Pause after typing
            isDeleting = true; // Start deleting
        }
        // If finished deleting one phrase
        else if (isDeleting && charIndex === 0) {
            isDeleting = false; // Start typing again
            phraseIndex = (phraseIndex + 1) % heroSubheadingPhrases.length; // Move to the next phrase
            typeDelay = 500; // Short delay before typing new phrase
        }

        setTimeout(typeSubheading, typeDelay);
    }

    // --- Initialize Effects in Hero Section ---
    // Hide hero buttons initially
    if (heroButtons) {
        heroButtons.style.opacity = 0;
        heroButtons.style.transform = 'translateY(20px)';
        heroButtons.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }

    // Trigger profile photo animation and start typing effect
    setTimeout(() => {
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.classList.add('is-visible'); // Trigger fade-in/slide-up animation for photo
        }

        // Start typing effect for subheading
        typeSubheading();

        // Show buttons after a while (or after all text is typed if you want)
        setTimeout(() => {
            if (heroButtons) {
                heroButtons.style.opacity = 1;
                heroButtons.style.transform = 'translateY(0)';
            }
        }, 3000); // Delay 3 seconds before buttons appear (adjust if needed)

    }, 100); // Short delay to ensure DOM is ready


    // --- "View All Projects" / "Hide Projects" Button Functionality ---
    const toggleProjectsBtn = document.getElementById('toggle-projects-btn');
    const additionalProjects = document.getElementById('additional-projects');
    
    if (toggleProjectsBtn && additionalProjects) {
        toggleProjectsBtn.addEventListener('click', function() {
            const isHidden = additionalProjects.classList.contains('hidden');

            if (isHidden) {
                // Show projects
                additionalProjects.classList.remove('hidden');
                additionalProjects.classList.add('is-visible'); // Add is-visible for transition
                toggleProjectsBtn.innerHTML = 'Hide Projects <i class="fas fa-angle-double-up"></i>';
                
                // Trigger on-scroll animation for newly visible projects
                // Add a small delay for each card to appear sequentially
                const newlyVisibleProjects = additionalProjects.querySelectorAll('.project-card.animate-on-scroll');
                let delay = 300; // Start delay after additional-projects container opens
                newlyVisibleProjects.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('is-visible');
                    }, delay + (index * 100)); // Delay each card
                });

                // Scroll down to the beginning of additional projects if there are many projects
                setTimeout(() => {
                    additionalProjects.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, delay + (newlyVisibleProjects.length * 100) + 100); // Scroll after all cards appear
                
            } else {
                // Hide projects
                additionalProjects.classList.add('hidden');
                additionalProjects.classList.remove('is-visible'); // Remove is-visible when hiding
                toggleProjectsBtn.innerHTML = 'View All Projects <i class="fas fa-angle-double-right"></i>';
                
                // Remove is-visible class from cards inside so they can be animated again
                const hiddenProjects = additionalProjects.querySelectorAll('.project-card.animate-on-scroll');
                hiddenProjects.forEach(element => {
                    element.classList.remove('is-visible');
                });

                // Scroll back up to the main projects section if hidden
                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});