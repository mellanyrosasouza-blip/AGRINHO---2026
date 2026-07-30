document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. ROTAÇÃO 3D DOS FLASHCARDS --- */
    const cards3D = document.querySelectorAll('.card-3d');

    cards3D.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    /* --- 2. ANIMAÇÃO DE REVEAL (FADE-IN UP) AO ROLAR A PÁGINA --- */
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null,
        threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    /* --- 3. VALIDAÇÃO DO FORMULÁRIO DE CONTATO --- */
    const form = document.querySelector('#contactForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.querySelector('#userName');
            const email = document.querySelector('#userEmail');
            const message = document.querySelector('#userMessage');

            let isFormValid = true;

            if (!name || name.value.trim() === '') {
                isFormValid = false;
                name.style.borderColor = '#5c3d2e';
            } else {
                name.style.borderColor = '#d8f3dc';
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email.value.trim())) {
                isFormValid = false;
                email.style.borderColor = '#5c3d2e';
            } else {
                email.style.borderColor = '#d8f3dc';
            }

            if (!message || message.value.trim() === '') {
                isFormValid = false;
                message.style.borderColor = '#5c3d2e';
            } else {
                message.style.borderColor = '#d8f3dc';
            }

            if (isFormValid) {
                alert('Mensagem enviada com sucesso! Agradecemos o seu feedback.');
                form.reset();
            } else {
                alert('Por favor, preencha corretamente todos os campos destacados.');
            }
        });
    }

});
