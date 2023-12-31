function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.body;
const divEl = document.querySelector(".widget");
const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");
divEl.addEventListener("click", () => {
  let colorEl = getRandomHexColor();
  bodyEl.style.backgroundColor = colorEl;
  spanEl.textContent = colorEl;
  }
)