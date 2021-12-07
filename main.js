
let menu = document.querySelector('.menu__list');
let pizzaTemp = document.querySelector('#pizza-item-template').content;
let pizzaFragment = document.createDocumentFragment();

for (let pizza of pizzas) {
  let pizzaWrap = pizzaTemp.cloneNode(true);
  pizzaWrap.querySelector('.pizza__img').src = pizza.image;
  pizzaWrap.querySelector('.pizza__p').textContent = pizza.desc;
  pizzaWrap.querySelector('.pizza__price').textContent += pizza.price;
  pizzaFragment.appendChild(pizzaWrap);
}

menu.appendChild(pizzaFragment)

// let addBtn = document.querySelector('.pizza__btn');
// addBtn.addEventListener('click', (e) => {
//   console.log(e.target.parentElement.firstElementChild.textContent)
// })


