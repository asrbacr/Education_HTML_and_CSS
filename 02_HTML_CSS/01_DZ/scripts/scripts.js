const productEls = JSON.parse(catalogData);
const productEl = document.querySelector("div.products_elements");

/* productEls.forEach((elem) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("products_card");
  productEl.appendChild(cardEl);

  const cardImgEl = document.createElement("div");
  cardImgEl.classList.add("products_card_img");
  cardEl.appendChild(cardImgEl);

  const imgEl = document.createElement("img");
  imgEl.src = elem.srcImg;
  imgEl.alt = elem.imgAlt;
  imgEl.classList.add("products_card-img");
  cardImgEl.appendChild(imgEl);

  const aEl = document.createElement("a");
  aEl.href = elem.hrefCard;
  aEl.classList.add("products_card_img-button");
  cardImgEl.appendChild(aEl);

  const pButtonTextEl = document.createElement("p");
  pButtonTextEl.classList.add("products_card_img-button-text");
  pButtonTextEl.innerHTML = "Add&nbsp;to&nbsp;Cart";
  aEl.appendChild(pButtonTextEl);

  const cardDownEl = document.createElement("div");
  cardDownEl.classList.add("products_card_down");
  cardEl.appendChild(cardDownEl);

  const prodHeadEl = document.createElement("p");
  prodHeadEl.classList.add("products_card_down_header");
  prodHeadEl.innerHTML = elem.productName;
  cardDownEl.appendChild(prodHeadEl);

  const prodTextEl = document.createElement("p");
  prodTextEl.classList.add("products_card_down_text");
  prodTextEl.innerHTML = elem.productText;
  cardDownEl.appendChild(prodTextEl);

  const prodPriceEl = document.createElement("p");
  prodPriceEl.classList.add("products_card_down_price");
  prodPriceEl.innerHTML = elem.productPrice;
  cardDownEl.appendChild(prodPriceEl);

  if (elem.id === 3) {
    cardEl.classList.add("products__hide");
  }
}); */

function displayList(arrData, rowPerPage, page) {
  const postsEl = document.querySelector("");

  const start = rowPerPage * page;
  const end = start + rowPerPage;
  const paginatedData = arrData.slice(start, end);

  paginatedData.forEach((el) => {
    const postEl = document.createElement("div");
    postEl.classList.add("");
    postEl.innerHTML = el;
    postsEl.appendChild(postEl);
  });
}

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}
productEls.forEach((el) => {
  const tempEl = document.getElementById("cardTemplate");

  const clone = tempEl.content.cloneNode(true);
  console.log(clone);
  clone.querySelector("img.products_card-img").src = el.srcImg;
  clone.querySelector("img.products_card-img").alt = el.imgAlt;
  clone.querySelector("a.products_card_img-button").href = el.hrefCard;
  clone.querySelector("p.products_card_down_header").innerHTML = el.productName;
  clone.querySelector("p.products_card_down_text").innerHTML = el.productText;
  clone.querySelector("p.products_card_down_price").innerHTML = el.productPrice;

  productEl.appendChild(clone);
});
