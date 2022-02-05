let counterValue = 0;

const decrementBtnRef = document.querySelector(
    '#counter button[data-action="decrement"]',
);
const incrementBtnRef = document.querySelector(
    '#counter button[data-action="increment"]',
);
const value = document.querySelector('#value');

function decrement() {
    value.textContent = counterValue -= 1;
}

function increment() {
    value.textContent = counterValue += 1;
}

incrementBtnRef.addEventListener('click', increment); 
decrementBtnRef.addEventListener('click', decrement);