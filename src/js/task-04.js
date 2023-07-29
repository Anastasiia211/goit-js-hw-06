const newClick = document.querySelector('#counter');
const newValue = document.querySelector('#value');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');


let counterValue = 0;

btnIncrement.addEventListener("click", plus);
btnDecrement.addEventListener("click", minus);

function counterValueFunction() {
    newValue.textContent = counterValue;
}

function plus(event) {
    counterValue += 1;
    counterValueFunction()
    
}

function minus(event) {
    counterValue -= 1;
    counterValueFunction()
}
counterValueFunction()




