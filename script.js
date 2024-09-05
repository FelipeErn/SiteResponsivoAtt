// Espera o DOM ser carregado
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    // Função para verificar a posição dos elementos
    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 50) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            } else {
                section.style.opacity = 0;
                section.style.transform = 'translateY(50px)';
            }
        });
    };

    // Aplica a função de rolagem
    fadeInOnScroll();
    window.addEventListener('scroll', fadeInOnScroll);
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelectorAll('.nav-link');

    // Função para verificar a posição dos elementos
    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 50) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            } else {
                section.style.opacity = 0;
                section.style.transform = 'translateY(50px)';
            }
        });
    };

    // Aplica a função de rolagem
    fadeInOnScroll();
    window.addEventListener('scroll', fadeInOnScroll);

    // Script para abrir/fechar o menu
    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Fecha o menu ao clicar em qualquer link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
});


