import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const currentDelayMs = document.querySelector('input[name=delay]').value;
  const isFulfilled = document.querySelector('input[value=fulfilled]').checked;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFulfilled) {
        resolve(currentDelayMs);
      } else {
        reject(currentDelayMs);
      }
    }, currentDelayMs);
  });

  promise
    .then(value => {
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${value}`,
        position: 'topRight',
      });
    }) 
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${error}`,
        position: 'topRight',
      });
    });
});