function loginForm() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let error = document.getElementById('error');

    if (emailRegex.test(email.value) || passwordRegex.test(password.value)) {
        if (emailRegex.test(email.value)) {
            if (passwordRegex.test(password.value)) {
                if (password.value == confirmPassword.value) {
                    event.preventDefault();
                    window.location.href = 'index2.html';
                }
                else {
                    event.preventDefault();
                    error.innerText = 'Your password does not match the confirm password.';
                }
            }
            else {
                event.preventDefault();
                error.innerText = 'Incorrect Password';
            }
        }
        else {
            event.preventDefault();
            error.innerText = 'Incorrect Email';
        }
    }
    else {
        event.preventDefault();
        error.innerText = 'Incorrect Credentials';
    }
}

let isOpen = true;
function eyeOpenClose1() {
    let eye1 = document.getElementById('eye1');
    isOpen = !isOpen
    if (isOpen) {
        eye1.className = "fa-solid fa-eye";
        password.type = 'text';
    }
    else {
        eye1.className = "fa-solid fa-eye-slash";
        password.type = 'password';
    }
}

let isClose = true;
function eyeOpenClose2() {
    let eye2 = document.getElementById('eye2');
    isClose = !isClose
    if (isClose) {
        eye2.className = "fa-solid fa-eye";
        confirmPassword.type = 'text';
    }
    else {
        eye2.className = "fa-solid fa-eye-slash";
        confirmPassword.type = 'password';
    }
}
