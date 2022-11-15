'use strict';

let sendForm = document.querySelector('.send');
const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

sendForm.addEventListener('click', () => {
    validate();
});
/*************************
 * Functions
*************************/
function validate() {
    let form = document.querySelector('form');
    let firstName = document.querySelector('.first-name').value.trim();
    let lastName = document.querySelector('.last-name').value.trim();
    let email = document.querySelector('.email').value.trim();
    let userMessage = document.querySelector('.message').value.trim();
    let formFields = document.querySelector('.form-status');

    let message = '';
    let valid = true;
    let count = 0;

    if (firstName.length === 0) {
        message += 'First name is required<br>';
        valid = false;
        count++;
    }

    if (lastName.length === 0) {
        message += 'Last name is required<br>';
        valid = false;
        count++;
    }

    if (email.length === 0 ) {
        message += 'Email is required<br>';
        valid = false;
        count++;
    } else if (!emailRegex.test(email)) {
        message += 'A valid email is required<br>';
        valid = false;
    }

    if (userMessage.length === 0) {
        message += 'Message is required<br>';
        valid = false;
        count++;
    }

    if (count === 4) {
        formFields.innerHTML = 'Fields with * are required';
        cancelFormSubmit();
    } else if (!valid) {
        formFields.innerHTML = message;
        cancelFormSubmit();
    } else {
        alert('Form submitted');
        form.submit();
    }
}

function cancelFormSubmit() {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
      });
}