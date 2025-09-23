// -->  imports

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
const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
    const slideWidth = carousel.offsetWidth;
    carousel.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
    updateDots(index);
}

function updateDots(activeIndex) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('bg-[rgb(179,66,194)]', i === activeIndex);
        dot.classList.toggle('bg-gray-500', i !== activeIndex);
    });
}
carousel.addEventListener('scroll', () => {
    const slideWidth = carousel.offsetWidth;
    const index = Math.round(carousel.scrollLeft / slideWidth);
    updateDots(index);
});

updateDots(0);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

