const input = document.querySelector("#validation-input");
console.log(input)
input.addEventListener("blur", onBlur);

function onBlur(evt) {
    const {value,dataset,classList} = evt.currentTarget;

    if (input.value.length === Number(input.dataset.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        
    }
    else {
        input.classList.add('invalid');
        input.classList.remove('valid');
   }
       
        
}


onBlur()

    




