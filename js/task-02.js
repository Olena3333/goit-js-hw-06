const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");
const ingrItems = [];
ingredients.forEach((el) => {
  const liEl = document.createElement('li');
  liEl.textContent = el;
  liEl.classList.add("item");
  ingrItems.push(liEl);
  liEl.style.listStyle = 'none';
});

ulEl.append(...ingrItems);

