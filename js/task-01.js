const allElement = document.querySelectorAll('#categories');
const itemList = document.querySelectorAll('.item');
console.dir(`Number of categories: ${itemList.length}`);

itemList.forEach((itemList) => {
    const title = itemList.querySelector('h2').textContent;
    const elements = itemList.querySelectorAll('li');
    console.dir(`Category: ${title}`);
    console.dir(`Elements: ${elements.length}`)
})

   