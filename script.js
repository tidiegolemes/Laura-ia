document.addEventListener('DOMContentLoaded', function () {
    // --- Menu Mobile ---
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        // Esta funcionalidade precisa ser implementada para exibir o menu mobile.
        // Por agora, ele está apenas no HTML e CSS.
        navToggle.addEventListener('click', () => {
            alert('Menu mobile clicado! A lógica para exibir o menu precisa ser adicionada aqui.');
            // Exemplo: document.querySelector('.nav-menu').classList.toggle('active');
        });
    }

    // --- Carrossel de Clientes (Swiper.js) ---
    if (typeof Swiper !== 'undefined') {
        new Swiper('.client-carousel', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 40,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 30 },
                1024: { slidesPerView: 5, spaceBetween: 40 }
            }
        });
    }
});
