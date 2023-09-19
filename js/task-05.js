const refs = {
    nameInput: document.querySelector("#name-input"),
    span: document.querySelector("#name-output"),
}

const OnInputChange = () => {
  refs.span.textContent = refs.nameInput.value || "Anonymous";
};

refs.nameInput.addEventListener('input', OnInputChange);


