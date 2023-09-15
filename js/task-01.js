const itemsEl = document.querySelectorAll('.item');
// console.log([...itemsEl]);
const number = itemsEl.length;
console.log(`Number of categories: ${number}`);
// const ulEl = document.querySelector('#categories');

itemsEl.forEach(el => {
    console.log(el.firstElementChild.textContent);
    console.log(el.querySelectorAll('li').length);
}
);





