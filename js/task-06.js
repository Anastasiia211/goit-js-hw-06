const input = document.querySelector('input[data-length="6"]');
console.log(input)
input.addEventListener("blur", onBlur);

function onBlur(evt) {
    const {value,dataset,classList} = evt.currentTarget;

    if (value.length === Number( dataset.length)) {
        classList.add('valid');
        classList.remove('invalid');
        
    }
   
       classList.add('invalid');
        classList.remove('valid');
        
}





