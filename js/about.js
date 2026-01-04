// About page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Any about page specific initialization can go here
    console.log('About page loaded');
});

        //profile links
        const profileLinks = {
            linkedin: 'https://www.linkedin.com/in/muhammed-azam-7a36192a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/azzu-250',
            blog: 'https://www.blogger.com/profile/04544749664367692345'
        };
        
        // links in the HTML
        document.querySelector('a[href="https://www.linkedin.com/in/muhammed-azam-7a36192a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"]').href = profileLinks.linkedin;
        document.querySelector('a[href="https://github.com/azzu-250"]').href = profileLinks.github;
        document.querySelector('a[href="https://www.blogger.com/profile/04544749664367692345"]').href = profileLinks.blog;
        
        // Add scroll-triggered animations
        document.addEventListener('DOMContentLoaded', function() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, observerOptions);
            
            // Observe contact and social cards
            document.querySelectorAll('.contact-card, .social-card').forEach(card => {
                card.style.animationPlayState = 'paused';
                observer.observe(card);
            });
        });