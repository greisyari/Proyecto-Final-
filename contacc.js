document.addEventListener("DOMContentLoaded", function() {

    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 100);
    });
});


const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', function(event) {

    event.preventDefault();

 
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const acepto = document.getElementById('checkAcepto');
    

    let isValid = true;

    nombre.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    mensaje.classList.remove('is-invalid');
    acepto.classList.remove('is-invalid');

   
    if (nombre.value.trim() === '') {
        nombre.classList.add('is-invalid');
        isValid = false;
    }


    if (email.value.trim() === '' || !email.value.includes('@')) {
        email.classList.add('is-invalid');
        isValid = false;
    }
    

    if (mensaje.value.trim() === '') {
        mensaje.classList.add('is-invalid');
        isValid = false;
    }

    if (!acepto.checked) {
        acepto.classList.add('is-invalid');
        isValid = false;
    }

   
    if (isValid) {
        
        contactForm.style.display = 'none'; 
        successMessage.classList.add('show'); 

    }
});