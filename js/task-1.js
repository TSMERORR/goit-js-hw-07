const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Total categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryItemsCount = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Number of items: ${categoryItemsCount}`);
});