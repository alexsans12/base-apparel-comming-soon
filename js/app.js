const form = document.querySelector(".form-apparel");
const inputEmail = document.querySelector("#email");
const button = document.querySelector(".form-apparel__button")
const labelMessage = document.querySelector(".form-apparel__error");
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


button.addEventListener('click', emailValidation);

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