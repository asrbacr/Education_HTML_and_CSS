const productEls = JSON.parse(catalogData);
const productEl = document.querySelector("div.products_elements");
addAllProducts(productEl, productEls);
