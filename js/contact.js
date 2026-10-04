const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const formSuccess = document.getElementById("formSuccess");


function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        nameInput.setAttribute("aria-invalid", "true");
        return false;
    }

    nameError.textContent = "";
    nameInput.setAttribute("aria-invalid", "false");
    return true;
}


function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email address.";
        emailInput.setAttribute("aria-invalid", "true");
        return false;
    }

    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailInput.setAttribute("aria-invalid", "true");
        return false;
    }

    emailError.textContent = "";
    emailInput.setAttribute("aria-invalid", "false");
    return true;
}


function validateMessage() {
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        messageInput.setAttribute("aria-invalid", "true");
        return false;
    }

    if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Your message must contain at least 10 characters.";
        messageInput.setAttribute("aria-invalid", "true");
        return false;
    }

    messageError.textContent = "";
    messageInput.setAttribute("aria-invalid", "false");
    return true;
}


form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameValid = validateName();
    const emailValid = validateEmail();
    const messageValid = validateMessage();

    if (nameValid && emailValid && messageValid) {
        formSuccess.textContent = "SENT SUCCESSFULLY";
        form.reset();
    } else {
        formSuccess.textContent = "";
    }
});