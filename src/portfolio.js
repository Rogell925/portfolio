document.addEventListener('DOMContentLoaded', () => {

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
  
    const skillBars = document.querySelectorAll('.skill-level');
  
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width'); 
            bar.style.width = '0'; 
            setTimeout(() => {
                bar.style.width = targetWidth; 
            }, 300);
        });
    }
  
    
    const skillSection = document.querySelector('.skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(skillSection); 
            }
        });
    }, { threshold: 0.5 });
  
    observer.observe(skillSection);
  
  });
  