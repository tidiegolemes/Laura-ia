document.addEventListener('DOMContentLoaded', function () {

    // --- Menu Mobile ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            document.body.classList.toggle('nav-open'); // Para estilizar o botão de fechar (X)
        });
    }

    // --- Carrossel de Clientes (Swiper.js) ---
    // Certifique-se de que a biblioteca Swiper.js está sendo carregada no HTML
    if (typeof Swiper !== 'undefined') {
        new Swiper('.client-carousel', {
            // Configurações do Swiper
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                // quando a largura da janela for >= 320px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // quando a largura da janela for >= 768px
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                // quando a largura da janela for >= 1024px
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 40
                }
            }
        });
    }

});
