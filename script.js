document.addEventListener('DOMContentLoaded', function() {

    // Animação de "revelar" ao rolar a página
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null, // relativo à viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% do elemento precisa estar visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: para a observação depois que o elemento se tornou visível
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(elem => {
        observer.observe(elem);
    });


    // Simulação de funcionalidades futuras (pode ser expandido)
    // Exemplo: Botão da biblioteca de exercícios
    const exerciseBtn = document.querySelector('.exercise-content .btn');
    if (exerciseBtn) {
        exerciseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Funcionalidade em desenvolvimento: Aqui abriria a biblioteca completa de exercícios!');
        });
    }

    /*
// Exemplo: Botão de inscrição
const ctaBtn = document.querySelector('.cta .btn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Funcionalidade em desenvolvimento: Aqui levaria para a página de cadastro!');
    });
}
*/

});