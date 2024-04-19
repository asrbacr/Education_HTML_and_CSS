const productEls = JSON.parse(catalogData);
const productEl = document.querySelector("div.products_elements");

const productPageEl = document.getElementById("cardTemplateProductPage");

fillingCardById(productPageEl, 3, productEls, productEl);
