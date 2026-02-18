document.addEventListener('DOMContentLoaded', function () {

    // --- Lógica do Menu Mobile ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            // Alterna a classe 'active' no menu para mostrá-lo/escondê-lo
            navMenu.classList.toggle('active');
            // Alterna a classe no body para estilizar o botão 'X' e travar o scroll
            document.body.classList.toggle('nav-open');
        });
    }

    // Adiciona CSS dinamicamente para o menu mobile
    const style = document.createElement('style');
    style.innerHTML = `
        @media (max-width: 960px) {
            .nav-menu {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: fixed;
                top: 0;
                right: -100%;
                width: 80%;
                height: 100%;
                background-color: var(--color-secondary);
                transition: right 0.4s ease-in-out;
            }
            .nav-menu.active {
                right: 0;
            }
            .nav-menu ul {
                flex-direction: column;
                gap: 30px;
                text-align: center;
            }
            .nav-menu a {
                color: #fff;
                font-size: 1.2rem;
            }
            body.nav-open {
                overflow: hidden;
            }
            .nav-open .nav-toggle span {
                background-color: var(--color-secondary); /* Mantém a cor original */
            }
            .nav-open .nav-toggle span:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }
            .nav-open .nav-toggle span:nth-child(2) {
                opacity: 0;
            }
            .nav-open .nav-toggle span:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }
        }
    `;
    document.head.appendChild(style);


    // --- Carrossel de Clientes (Swiper.js) ---
    if (typeof Swiper !== 'undefined') {
        new Swiper('.client-carousel', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 50,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: { slidesPerView: 2, spaceBetween: 30 },
                768: { slidesPerView: 4, spaceBetween: 40 },
                1024: { slidesPerView: 5, spaceBetween: 50 }
            }
        });
    }

});
