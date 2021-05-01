// Счетчик состоит из спана и кнопок,
// которые должны увеличивать и уменьшать
// значение счетчика на 1.
// Создай переменную counterValue в которой
// будет хранится текущее значение счетчика.
// Создай функции increment и decrement для
// увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы
// функций и обновление интерфейса

const button1 = document.querySelector('[data-action="increment"]');
const button2 = document.querySelector('[data-action="decrement"]');
const span = document.querySelector('#value');

let counterValue = 0;
const increment = () => {
    counterValue += 1;
    document.getElementById('value').innerHTML = counterValue;
}
    
const decrement = () => {
    counterValue -= 1;
    document.getElementById('value').innerHTML = counterValue;
}
button1.addEventListener('click', increment);
button2.addEventListener('click', decrement);

console.log(document);