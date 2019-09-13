const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equal = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    });
}

equal.addEventListener('click', () => {
    if (screen.value === '') {
        alert('input is empty');
    } else {
        let value = eval(screen.value);
        screen.value = value;
    }
});
clear.addEventListener('click', () => {
    screen.value = '';
});