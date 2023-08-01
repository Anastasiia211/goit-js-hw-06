const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener("submit", handleSubmite);

function handleSubmite(evt) {
    evt.preventDefault();

    const { email, password } = evt.currentTarget.elements;

    const login = {
        userEmail: email.value,
    userPassword: password.value
    }
if (email.value === "" || password.value === "") {
    alert('Заповніть всі поля');
} else {
    console.log(login)
    form.reset()
}
    }




