document.addEventListener('DOMContentLoaded', () => {

    /* --- GIRO DOS FLASHCARDS --- */
    const flashcards = document.querySelectorAll('.flashcard');

    flashcards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    /* --- VALIDAÇÃO DO FORMULÁRIO DE CONTATO --- */
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = document.querySelector('#input-name');
            const emailInput = document.querySelector('#input-email');
            const messageInput = document.querySelector('#input-message');

            let isValid = true;

            if (!nameInput || nameInput.value.trim() === '') {
                isValid = false;
                nameInput.style.borderColor = '#e53935';
            } else {
                nameInput.style.borderColor = '#ccc';
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput || !emailPattern.test(emailInput.value.trim())) {
                isValid = false;
                emailInput.style.borderColor = '#e53935';
            } else {
                emailInput.style.borderColor = '#ccc';
            }

            if (!messageInput || messageInput.value.trim() === '') {
                isValid = false;
                messageInput.style.borderColor = '#e53935';
            } else {
                messageInput.style.borderColor = '#ccc';
            }

            if (isValid) {
                alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
                contactForm.reset();
            } else {
                alert('Por favor, preencha corretamente os campos destacados em vermelho.');
            }
        });
    }

});
