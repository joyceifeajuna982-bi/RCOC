document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });

    // 2. Prayer Points Accordion Toggle
    const prayerItems = document.querySelectorAll('.prayer-item');
    
    prayerItems.forEach(item => {
        const question = item.querySelector('.prayer-question');
        question.addEventListener('click', () => {
            // Close other items
            prayerItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('active');
                }
            });
            // Toggle current
            item.classList.toggle('active');
        });
    });

    // 3. Copy Bank Account Numbers Functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const accountNo = btn.getAttribute('data-info');
            navigator.clipboard.writeText(accountNo).then(() => {
                const originalText = btn.innerHTML;
                btn.innerHTML = `<i class="fa-solid fa-check"></i> Account Number Copied!`;
                btn.style.background = '#10b981';
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                }, 2500);
            });
        });
    });

    // 4. Handle Form Submissions with Simple Toast Alert
    const forms = document.querySelectorAll('.styled-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('🎉 Glory to God! Your submission has been received successfully. We will reach out to you shortly.');
            form.reset();
        });
    });

    // 5. Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(9, 13, 22, 0.95)';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(9, 13, 22, 0.8)';
            header.style.boxShadow = 'none';
        }
    });
});