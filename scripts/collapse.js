(function () {
    const buttons = Array.from(document.querySelectorAll('.accordion-btn'));

    function closePanel(btn) {
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('btn-open');
        const icon = btn.querySelector('.icon');
        if (icon) icon.textContent = '+';
        const panel = document.getElementById(btn.getAttribute('aria-controls'));
        if (panel) panel.style.maxHeight = null;
    }

    function openPanel(btn) {
        // Fechar outros (para ter comportamento "apenas 1 aberto")
        buttons.forEach(b => {
            if (b !== btn && b.getAttribute('aria-expanded') === 'true') closePanel(b);
        });

        btn.setAttribute('aria-expanded', 'true');
        btn.classList.add('btn-open');
        const icon = btn.querySelector('.icon');
        if (icon) icon.textContent = '−';
        const panel = document.getElementById(btn.getAttribute('aria-controls'));
        if (panel) {
            // definir maxHeight igual ao scrollHeight para permitir transição suave
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            if (expanded) {
                closePanel(btn);
            } else {
                openPanel(btn);
            }
        });
    });

    // Em resize, atualiza altura dos painéis abertos (quando conteúdo muda)
    window.addEventListener('resize', () => {
        buttons.forEach(btn => {
            if (btn.getAttribute('aria-expanded') === 'true') {
                const panel = document.getElementById(btn.getAttribute('aria-controls'));
                if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });
})();

const img = document.querySelector('#img-effect')
const btn1 = document.querySelector('#acc-btn-1').addEventListener('click', () => {
    img.src = './components/img/services (1).png';
})
const btn2 = document.querySelector('#acc-btn-2').addEventListener('click', () => {
    img.src = './components/img/services (2).png';
})
const btn3 = document.querySelector('#acc-btn-3').addEventListener('click', () => {
    img.src = './components/img/services (3).png';
})
const btn4 = document.querySelector('#acc-btn-4').addEventListener('click', () => {
    img.src = './components/img/services (4).png';
})