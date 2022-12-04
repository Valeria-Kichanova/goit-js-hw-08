import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(localData, 500));

const email = document.querySelector('[name = "email"]');
const message = document.querySelector('[name = "message"]');

function localData() {
  const formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onLocalData() {
  let localData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (localData !== null) {
    email.value = localData.email;
    message.value = localData.message;
  }
}

onLocalData();

feedbackForm.addEventListener('submit', onSubmitData);

function onSubmitData(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}
