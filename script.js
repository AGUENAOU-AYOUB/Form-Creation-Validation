document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const userName = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        const messages = [];

        if (userName.lentgh < 3) {
            isValid = false;
            messages.push('Your Username Is Not Valid ❌')
        }
        if (!email.includes('@') && !email.includes('.')) {
            isValid = false;
            messages.push('Your Email Is Not Valid ❌')
        }
        if (password < 8) {
            isValid = false;
            messages.push('Your Password Is Not Valid ❌')
        }
        feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textcontent = "Registration seccessful!";
            feedbackDiv.style.color = "#28a745";
            form.submit();
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }
    })
    
});