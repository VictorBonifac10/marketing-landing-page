// -->  impots

import { clientsData } from './data.js';

// --> navbar

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

// --> clients

const clientGrid = document.querySelector('#client-grid');

clientsData.forEach(element => {

    clientGrid.innerHTML += `

        <div class="group bg-[#1b1b1b] w-30 aspect-square flex justify-center items-center transition-all duration-300 hover:bg-white/10 hover:scale-105">
            <img src="${element.src}" class="p-3 transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110">
        </div>

        `
});

// --> Depoiments

const carousel = document.getElementById('carousel');
const cards = carousel.querySelectorAll('.card');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function getGapPx() {
    const g = getComputedStyle(carousel).gap;
    return g ? parseFloat(g) : 0;
}

function scrollAmount() {
    if (!cards.length) return carousel.clientWidth;
    return cards[0].offsetWidth + getGapPx();
}

prev.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
});

next.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
});