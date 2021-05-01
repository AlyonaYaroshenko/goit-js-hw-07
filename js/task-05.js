// Напиши скрипт который, при
// наборе текста в инпуте
// input#name - input(событие 
// input), подставляет его
// текущее значение в span#name
// - output.Если инпут пустой,
//     в спане должна отображаться
// строка 'незнакомец'.

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
input.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    span.textContent = event.currentTarget.value;
    if (input.value === '') {
    span.textContent = 'незнакомец';
    }
    return onInputChange;
};
