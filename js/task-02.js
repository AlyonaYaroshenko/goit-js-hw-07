//В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JS есть массив строк.
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента 
// массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию
// в список ul.ingredients.Для создания DOM - узлов
// используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// const list = document.querySelector('ul');

// const newList = options => {
//   return options.map(option => {
//     const newLi = document.createElement('li');
//     list.appendChild(newLi);
//     return newLi;
//   });
// };
// const elements = newList(ingredients);
// list.appendChild(...elements);
// console.log(list);

const list = document.querySelector('#ingredients')
const newList = [];

ingredients.forEach(ingredient => {
    const listEl = document.createElement('li');
  listEl.textContent = ingredient;
  newList.push(listEl);
})

list.append(...newList);
console.log(document);





