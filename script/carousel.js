const carousel = document.getElementById('health-carousel');
if (carousel) {
    const slides = [...carousel.querySelectorAll('[data-carousel-item]')];
    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    const dots = [...carousel.querySelectorAll('[data-carousel-slide-to]')];
    let i = 0, t;

    const showSlide = index => {
        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle('hidden', slideIndex !== index);
        });
        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('bg-white', dotIndex === index);
            dot.classList.toggle('bg-white/50', dotIndex !== index);
        });
    };

    const showNext = () => {
        i = (i + 1) % slides.length;
        showSlide(i);
    };

    const showPrev = () => {
        i = (i - 1 + slides.length) % slides.length;
        showSlide(i);
    };

    const startAutoSlide = () => {
        t = setInterval(showNext, 4000);
    };

    prev.addEventListener('click', showPrev);
    next.addEventListener('click', showNext);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            i = index;
            showSlide(i);
        });
    });

    startAutoSlide(); 

}