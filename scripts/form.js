const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const errorIcon = document.querySelector('#error-icon');
const errorMessage = document.querySelector('#error-message');
const submitBtn = document.querySelector('#submit-btn');
const popUp = document.querySelector('.pop-up');
const closeBtn = document.getElementById('close-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!isValidEmail(emailInput.value)) {
    showError();
  } else {
    hideError();
    // Submit the form or perform other actions
  }
  form.reset();
  popUp.classList.remove('hide');
  console.log(`${emailInput.value} has been submitted!`);
});

function isValidEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError() {
  errorIcon.classList.remove('hide');
  errorMessage.classList.remove('hide');
  emailInput.classList.add('input-error');
  submitBtn.setAttribute('disabled', 'true');
}

function hideError() {
  errorIcon.classList.add('hide');
  errorMessage.classList.add('hide');
  emailInput.classList.remove('input-error');
  submitBtn.removeAttribute('disabled');
}

emailInput.addEventListener('input', () => {
  if (isValidEmail(emailInput.value)) {
    hideError();
  } else {
    showError();
  }
});

closeBtn.addEventListener('click', () => {
  popUp.classList.add('hide');
});
