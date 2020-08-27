const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

const COLOR = {
    SUCCESS: "skyblue",
    ERROR: "red"
};

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if(!isValid) {
        message.textContent = "Please fill out all fields";
        message.style.color = COLOR.ERROR;
        messageContainer.style.borderColor = COLOR.ERROR;
        return;
    }
    // Check to see if passwords match
    if(password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = COLOR.SUCCESS;
        password2El.style.borderColor = COLOR.SUCCESS;
    } else {
        passwordsMatch = false;
        message.textContent = "Maku sure passwords match.";
        message.style.color = COLOR.ERROR;
        messageContainer.style.borderColor = COLOR.ERROR;
        password1El.style.borderColor = COLOR.ERROR;
        password2El.style.borderColor = COLOR.ERROR;
        return;
    }
    // If form is valid and passwords match
    if(isValid && passwordsMatch) {
        message.textContent = "Successfully Registered!";
        message.style.color = COLOR.SUCCESS;
        messageContainer.style.borderColor = COLOR.SUCCESS;
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    // Submit Data if Valid
    if(isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener("submit", processFormData);
