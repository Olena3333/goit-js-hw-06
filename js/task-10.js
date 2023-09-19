function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divControle = document.querySelector("#controls")
const divBoxes = document.querySelector("#boxes")
const inputEl = divControle.firstElementChild;
const btnCreate = document.querySelector("#controls button[data-create]")
const btnDestroy = document.querySelector("#controls button[data-destroy]");


function createBoxes(amount) {
  const newBoxes = [];
  let divSize = 30;
  for (let i = 0; i < amount; i += 1){
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${divSize}px`;
    divEl.style.height = `${divSize}px`;
    divSize += 10;
    newBoxes.push(divEl);
  }
  divBoxes.append(...newBoxes);
}

btnCreate.addEventListener("click", () => {
  const amount = inputEl.value;
  createBoxes(amount);
});

btnDestroy.addEventListener("click", () => {
  divBoxes.innerHTML = "";
});