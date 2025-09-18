// Adiciona ou remove a classe .scrolled no navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --> carousel

const container = document.getElementById('text-animate');

const originalContent = container.innerHTML;
container.innerHTML += originalContent;

let scrollSpeed = 1; // px por passo
let intervalTime = 35; // velocidade

function autoScroll() {
    container.scrollLeft += scrollSpeed;

    if (container.scrollLeft >= container.scrollWidth / 2) { //volta para o início
        container.scrollLeft = 0;
    }
}

setInterval(autoScroll, intervalTime);