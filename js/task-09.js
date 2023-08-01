function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector('body');
const click = document.querySelector('.change-color');
const color = document.querySelector('.color');



click.addEventListener("click", handleClick);

function handleClick(evt) {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  color.textContent = color;
}
handleClick()

