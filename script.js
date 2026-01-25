// JavaScript Completo - Agente IA

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // INTERSECTION OBSERVER - Animações ao scroll
    // ========================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observar elementos para animação
    const animatedElements = document.querySelectorAll(
        '.card, .benefit-card, .process-step, .faq-item, .section-header, .nicho-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
        observer.observe(el);
    });

    // ========================================
    // FAQ ACCORDION
    // ========================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Fechar outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle item atual
            item.classList.toggle('active');
        });
    });

    // ========================================
    // CHAT DEMO ANIMADO
    // ========================================
    const chatDemo = document.getElementById('chatDemo');
    if (chatDemo) {
        const messages = chatDemo.querySelectorAll('.message');
        messages.forEach((msg, index) => {
            msg.style.opacity = '0';
            setTimeout(() => {
                msg.style.transition = 'opacity 0.5s ease';
                msg.style.opacity = '1';
            }, (index + 1) * 800);
        });
    }

    // ========================================
    // SMOOTH SCROLL
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // TRACKING DE CLIQUES NO WHATSAPP
    // ========================================
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Google Analytics 4
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    'event_category': 'engagement',
                    'event_label': 'CTA WhatsApp Agente IA',
                    'value': 1
                });
            }

            // Facebook Pixel
            if (typeof fbq !== 'undefined') {
                fbq('track', 'Contact', {
                    content_name: 'WhatsApp CTA',
                    content_category: 'Agente IA'
                });
            }

            console.log('WhatsApp CTA clicked');
        });
    });

    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================
    let lastScroll = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }

        lastScroll = currentScroll;
    });

    // ========================================
    // HOVER EFFECT NOS CARDS DE NICHO
    // ========================================
    const nichoCards = document.querySelectorAll('.nicho-card');

    nichoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ========================================
    // LAZY LOADING DE IMAGENS
    // ========================================
    const images = document.querySelectorAll('img[src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // ========================================
    // EFEITO DE PARALLAX SUAVE NO HERO
    // ========================================
    const heroImage = document.querySelector('.hero-image');

    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }

    // ========================================
    // CONTADOR ANIMADO (se adicionar métricas)
    // ========================================
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // ========================================
    // LOG DE INICIALIZAÇÃO
    // ========================================
    console.log('%c🚀 Agente IA - Website Loaded', 'color: #8b5cf6; font-size: 16px; font-weight: bold;');
    console.log('%cDesenvolvido por SHKGROUP.IA', 'color: #7c3aed; font-size: 12px;');
});

// ========================================
// PREVENÇÃO DE SCROLL HORIZONTAL
// ========================================
window.addEventListener('load', function() {
    document.body.style.overflowX = 'hidden';
});
