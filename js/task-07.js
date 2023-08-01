const inputText = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
console.log(inputText)

inputText.addEventListener("input", onInputFontSize);

function onInputFontSize (evt) {
    const newInput = evt.currentTarget.value;

    console.log(`$ {newInput}px`);
    spanText.style.fontSize = `${newInput}px`;
    } 


