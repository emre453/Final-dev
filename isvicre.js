 
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  

        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);  

         
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

 
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); / 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Merhaba ${name}, mesajınızı aldık!`);
    } else {
        alert('Lütfen tüm alanları doldurun!');
    }
});
