document.addEventListener("DOMContentLoaded", () => {
    // Exemplo de script básico para animações em elementos
    const serviceElements = document.querySelectorAll('.service');
    
    serviceElements.forEach(service => {
        service.addEventListener('mouseenter', () => {
            service.classList.add('highlight');
        });
        service.addEventListener('mouseleave', () => {
            service.classList.remove('highlight');
        });
    });
});
