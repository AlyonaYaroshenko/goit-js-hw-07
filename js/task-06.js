// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное 
// количество символов.
// Сколько символов должно быть в инпуте, 
// указывается в его атрибуте data - length.
// // Если введено подходящее количество, 
// то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй 
// CSS - классы valid и invalid.


const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);
input.classList.add("js-valid", "js-invalid");
const styleValid = document.querySelector('.js-valid');
const styleInvalid = document.querySelector('.js-invalid')

const validLength = input.dataset.length;


function onInputBlur() {
    console.log('there is no focus');
    if (input.value.length === Number(validLength)) {
// document.querySelector('.js-valid').style.borderColor = 'green';
    styleValid.style.borderColor = 'green';

    }
    else {
// document.querySelector('.js-invalid').style.borderColor = 'red';
    styleInvalid.style.borderColor = 'red';
        };
    
}

// function onInputGreen() {
//     input.classList.add("js-valid") {

//     }
// }