//Welcome Messages
const welcomeMessages = [
    "Welcome to Our Restaurant!",
    "We Serve the Best Dishes!",
    "Visit Us Today!"
];
let index = 0;
const welcomeElement = document.getElementById('welcome');
if (welcomeElement) {
    setInterval(() => {
        welcomeElement.innerHTML = `<h1>${welcomeMessages[index]}</h1>`;
        index = (index + 1) % welcomeMessages.length;
    }, 4000);
}

//the Hover Effect
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const image = card.querySelector('img');
        image.src = 'images/done.jpg';
    });
});

document.querySelectorAll('.price').forEach(price => {
    price.addEventListener('mouseover', () => price.style.fontSize = '20px');
    price.addEventListener('mouseout', () => price.style.fontSize = '16px');
});

//Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name.value && email.value && message.value) {
            const notification = document.getElementById('form-notification');
            notification.innerText = "Form submitted successfully!";
            notification.style.color = "green";
        }
    });

    document.querySelectorAll('#contact-form input, #contact-form textarea').forEach(input => {
        input.addEventListener('change', () => {
            input.value = input.value.toUpperCase();
            input.style.color = "blue";
        });
    });
}
