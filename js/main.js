var emailInput = document.getElementById('email');
var submitButton = document.getElementById('submit');
var warningDiv = document.getElementById('warning');
var form = document.getElementById('form');
var errorIcon = document.getElementById('error-icon');

submitButton.addEventListener('click', function() {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(emailInput.value)) {
        warningDiv.innerText = 'Please provide a valid email';
        errorIcon.classList.remove('invisible');
    }
    else{
        warningDiv.innerText = ' ';
        errorIcon.classList.add('invisible');
        form.submit()
    }
});
