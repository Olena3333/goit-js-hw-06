const form = document.querySelector(".login-form");
 
const OnSubmit = (e) => {
    e.preventDefault();
    const { email, password, btn} = e.target.elements;
if (!email.value.trim() || !password.value.trim()) {
  return alert("Fill all fields!");
}
    const userData = {
        userEmail: email.value,
        userPassword: password.value,
    };
    console.log(userData);
    form.reset();
    
};
    form.addEventListener("submit", OnSubmit);