document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário para uma página de servidor

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validação simples
        if (name === '' || email === '' || message === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Exemplo de como processar os dados do formulário (aqui apenas mostramos no console)
        console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);

        // Limpa o formulário após o envio
        contactForm.reset();

        // Feedback ao usuário
        alert('Mensagem enviada com sucesso!');
    });
});
