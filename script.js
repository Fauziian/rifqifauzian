document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });

            const navToggle = document.getElementById('nav-toggle');
            if (navToggle && navToggle.checked) {
                navToggle.checked = false;
            }
        });
    });

    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const animateOnScrollElements = document.querySelectorAll(
        'section h2, .skill-category, .project-card, .job-entry, .text-center.animate-on-scroll, .contact-section p.animate-on-scroll, .contact-section .contact-links a'
    );

    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                if (!entry.target.closest('#additional-projects') || !entry.target.closest('#additional-projects').classList.contains('is-visible')) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);

    animateOnScrollElements.forEach(element => {
        element.classList.add('animate-on-scroll');
        observer.observe(element);
    });

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = -scrollPosition * 0.2 + 'px';
        });
    }

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

    const heroHeadingElement = document.querySelector('.typed-text-heading');
    const heroSubheadingElement = document.querySelector('.typed-text-subheading');
    const heroParagraphElement = document.querySelector('.typed-text-paragraph');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroImage = document.querySelector('.hero-image');

    const heroHeading = "Hello, I'm Rifqi Fauzi";
    const heroSubheadingPhrases = [
        "Software Engineer",
        "Network Engineer",
        "Web Developer",
        "UI/UX Designer",
        "Video Editor"
    ];
    const heroParagraph = "I am Rifqi Fauzi Anwar, an aspiring software and network engineer with a strong foundation in full-stack web development, 2D game programming in Java, and network configuration using Mikrotik. I am passionate about creating efficient, user-oriented digital solutions through clean design, structured code, and practical network integration. With hands-on experience in both frontend and backend development, as well as basic infrastructure setup, I am committed to delivering functional and innovative systems that meet real-world needs.";

    const typingSpeed = 70;
    const deletingSpeed = 40;
    const phraseDelay = 1500;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    if (heroHeadingElement) {
        heroHeadingElement.textContent = heroHeading;
    }
    if (heroParagraphElement) {
        heroParagraphElement.textContent = heroParagraph;
    }

    function typeSubheading() {
        const currentPhrase = heroSubheadingPhrases[phraseIndex];

        if (isDeleting) {
            heroSubheadingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            heroSubheadingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeDelay = typingSpeed;
        if (isDeleting) {
            typeDelay = deletingSpeed;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeDelay = phraseDelay;
            isDeleting = true;
        }
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % heroSubheadingPhrases.length;
            typeDelay = 500;
        }

        setTimeout(typeSubheading, typeDelay);
    }

    if (heroButtons) {
        heroButtons.style.opacity = 0;
        heroButtons.style.transform = 'translateY(20px)';
        heroButtons.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    }

    setTimeout(() => {
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.classList.add('is-visible');
        }

        typeSubheading();

        setTimeout(() => {
            if (heroButtons) {
                heroButtons.style.opacity = 1;
                heroButtons.style.transform = 'translateY(0)';
            }
        }, 3000);

    }, 100);

    const toggleProjectsBtn = document.getElementById('toggle-projects-btn');
    const additionalProjects = document.getElementById('additional-projects');
    
    if (toggleProjectsBtn && additionalProjects) {
        toggleProjectsBtn.addEventListener('click', function() {
            const isHidden = additionalProjects.classList.contains('hidden');

            if (isHidden) {
                additionalProjects.classList.remove('hidden');
                additionalProjects.classList.add('is-visible');
                toggleProjectsBtn.innerHTML = 'Hide Projects <i class="fas fa-angle-double-up"></i>';
                
                const newlyVisibleProjects = additionalProjects.querySelectorAll('.project-card.animate-on-scroll');
                let delay = 300;
                
                let animatedCardCount = 0;
                const totalCardsToAnimate = newlyVisibleProjects.length;

                newlyVisibleProjects.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('is-visible');
                        animatedCardCount++;
                        
                        if (animatedCardCount === totalCardsToAnimate) {
                            setTimeout(() => {
                                const lastProjectCard = additionalProjects.lastElementChild;
                                if (lastProjectCard) {
                                    lastProjectCard.scrollIntoView({ behavior: 'smooth', block: 'end' });
                                } else {
                                    additionalProjects.scrollIntoView({ behavior: 'smooth', block: 'end' });
                                }
                            }, 300);
                        }
                    }, delay + (index * 100));
                });
                
            } else {
                additionalProjects.classList.add('hidden');
                additionalProjects.classList.remove('is-visible');
                toggleProjectsBtn.innerHTML = 'View All Projects <i class="fas fa-angle-double-right"></i>';
                
                const hiddenProjects = additionalProjects.querySelectorAll('.project-card.animate-on-scroll');
                hiddenProjects.forEach(element => {
                    element.classList.remove('is-visible');
                });

                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
