
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

let addBtn = document.querySelectorAll('.pizza__btn');
let cart = document.querySelector('.cart__list')
let subtotal = document.querySelector('.subtotal');
let tax = document.querySelector('.tax');
let total = document.querySelector('.total');

addBtn.forEach(function (btn) {
  btn.addEventListener('click', (e) => {
    for (let pizza of pizzas) {
      if (pizza.desc == e.target.parentElement.firstElementChild.textContent) {
        let pizzaWrap = pizzaTemp.cloneNode(true);
        pizzaWrap.querySelector('.menu__item').classList.add('cart__item');
        pizzaWrap.querySelector('.pizza__img').src = pizza.image;
        pizzaWrap.querySelector('.pizza__img').classList.add('cart__img');
        pizzaWrap.querySelector('.pizza__p').textContent = pizza.desc;
        pizzaWrap.querySelector('.pizza__price').textContent += pizza.price;
        pizzaWrap.querySelector('.pizza__price').classList.add('cart__price');
        pizzaWrap.querySelector('.pizza__btn').style.display = 'none';
        let price = Number(pizzaWrap.querySelector('.pizza__price').textContent.slice(1));
        subtotal.textContent = String(Number(subtotal.textContent) + price).slice(0, 5);
        tax.textContent =  String(Number(subtotal.textContent) * (10 / 100)).slice(0, 5);
        total.textContent = Number(subtotal.textContent) + Number(tax.textContent)
        pizzaFragment.appendChild(pizzaWrap);
      }
    }
    cart.appendChild(pizzaFragment)
  })
})

