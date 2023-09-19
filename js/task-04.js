let counterValue = 0;
const btnDec = document.querySelector('[data-action="decrement"]');
// console.log(btnDec);
const btnInc = document.querySelector('[data-action="increment"]');
// console.log(btnInc);
const spanVal = document.querySelector("#value");
// console.log(spanVal);

const OnClick = (e) => {
    if (e.target.dataset.action === 'increment') {
        counterValue += 1;
        spanVal.textContent = counterValue;
        return;
    }
    counterValue -= 1;
    spanVal.textContent = counterValue;
};

btnDec.addEventListener('click', OnClick);
btnInc.addEventListener('click', OnClick);