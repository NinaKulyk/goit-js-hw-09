const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const formData = {
    email: '',
    message: ''
};

window.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        formData.email = email;
        formData.message = message;
        emailInput.value = email;
        messageInput.value = message;
    }
});

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (emailInput.value === '' || messageInput.value === '') {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    form.reset();
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
});