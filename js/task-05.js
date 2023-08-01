const input = document.querySelector("#name-input");
const nameSpan = document.querySelector("#name-output");

input.addEventListener("input", newInput);

function newInput() {
    if (input.value === '') {
        nameSpan.textContent = 'Anonymous';
    } else {
        nameSpan.textContent = input.value;
    }
} 
newInput()




