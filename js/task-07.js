const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

const OnInputChange = (e) => {
    const inputValue = e.currentTarget.value;
    span.style.fontSize = `${inputValue}px`;
};

input.addEventListener("input", OnInputChange);