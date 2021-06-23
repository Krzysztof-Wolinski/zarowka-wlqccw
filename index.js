import './style.css';

const bulb = document.querySelector('.bulb');
const lightToggle = document.querySelector('#light-toggle');

lightToggle.addEventListener('click', function isOnOff() {
  lightToggle.checked
    ? bulb.classList.add('bulb--on')
    : bulb.classList.remove('bulb--on');
});
