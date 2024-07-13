function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password svg');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                <path d="M13.359 11.238A8.71 8.71 0 0 0 16 8s-3-5.5-8-5.5c-1.532 0-2.943.342-4.175.94l1.489 1.49A6.71 6.71 0 0 1 8 3.5c2.95 0 5.252 2.24 6.441 4a7.754 7.754 0 0 1-1.132 1.62l.832.832a8.709 8.709 0 0 0-.782-.714zm-.775.708 1.654 1.654a.75.75 0 1 1-1.061 1.061l-1.654-1.654a6.705 6.705 0 0 1-2.76 1.21 7.646 7.646 0 0 1-2.008.268c-2.95 0-5.252-2.24-6.441-4A7.753 7.753 0 0 1 4.45 5.677L2.797 4.023A8.71 8.71 0 0 0 0 8s3 5.5 8 5.5a8.61 8.61 0 0 0 3.872-.893zm-3.846-.747A3 3 0 0 0 8 5.5a3 3 0 0 0-2.031.792L8 8.323a1.5 1.5 0 0 1 1.884 1.884l1.854 1.854z"/>
                <path d="M4.052 3.646a.75.75 0 1 1 1.061-1.061l7.846 7.846a.75.75 0 0 1-1.06 1.061L4.052 3.646z"/>
            </svg>
        `;
    } else {
        passwordField.type = 'password';
        toggleBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zm-8 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
        `;
    }
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const terms = document.getElementById('terms');

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formAlert = document.getElementById('formAlert');

    if (!firstName.value) {
        firstNameError.style.display = 'block';
        isValid = false;
    } else {
        firstNameError.style.display = 'none';
    }

    if (!lastName.value) {
        lastNameError.style.display = 'block';
        isValid = false;
    } else {
        lastNameError.style.display = 'none';
    }

    if (!email.value || !email.value.includes('@')) {
        emailError.style.display = 'block';
        email.classList.add('error');
        isValid = false;
    } else {
        emailError.style.display = 'none';
        email.classList.remove('error');
    }

    const passwordRegex = /^(?=.*[0-9]).{8,}$/;
    if (!password.value || !passwordRegex.test(password.value)) {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (!terms.checked) {
        alert('You must accept the terms and conditions');
        isValid = false;
    }

    if (!isValid) {
        formAlert.style.display = 'block';
    } else {
        formAlert.style.display = 'none';
        alert('Form submitted successfully!');
    }
});
