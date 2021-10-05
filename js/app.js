const form = document.querySelector(".form-apparel");
const inputEmail = document.querySelector("#email");
const labelMessage = document.querySelector(".form-apparel__error");
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


form.addEventListener('submit', emailValidation);

function emailValidation(e) {
    e.preventDefault();

    let email = inputEmail.value;

    if(!regexEmail.exec(email)) {
        labelMessage.classList.add('form-apparel__error--show');
        form.classList.add('form-apparel__error-icon');
    }
    else {
        labelMessage.classList.remove('form-apparel__error--show');
        form.classList.remove('form-apparel__error-icon');
    }
}