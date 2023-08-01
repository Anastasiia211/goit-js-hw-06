const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allList = document.querySelector('#ingredients');

const newEllements = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.classList.add('item');
  li.textContent = ingredient;
  console.log(li);
  return li;


})
allList.append(...newEllements);




