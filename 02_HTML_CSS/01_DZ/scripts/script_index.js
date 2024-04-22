const productEls = JSON.parse(catalogData);
const productEl = document.querySelector("div.products_elements");

const indexPageEl = document.getElementById("cardTemplate");
fillingCardById(indexPageEl, 6, productEls, productEl);