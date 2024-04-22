// const productEls = JSON.parse(catalogData);
const cardForBasket = document.querySelector("p.products_card_img-button-text");
console.log(productEls);

const addToCart = (obj = {}) => {
  productEls.push(obj);
  const dc = productEls.find((e) => e === obj);
  dc.quantity = 0;

  dc.updateQuantity = (value) => {
    const v = Number.parseInt(value);
    quantity.value = v;
    dc.quantity = v;
  };
  dc.removeItem = () => {
    const idx = productEls.indexOf(dc);
    if (idx > -1) {
      dc.obj.remove();
      productEls.splice(idx, 1);
    }
    checkCart();
  };

  dc.obj = cartTpl.cloneNode(true);
  dc.obj.querySelector(".image img").src = dc.img;
  dc.obj.querySelector(".desc .title .name").innerHTML = dc.name;
  dc.obj.querySelector(".desc .title .type").innerHTML = dc.type;
  dc.obj.querySelector(".desc .props.price").innerHTML = dc.price;
  dc.obj.querySelector(".desc .props.color").innerHTML = dc.color;
  dc.obj.querySelector(".desc .props.size").innerHTML = dc.size;
  const quantity = dc.obj.querySelector(".desc .props.quantity input");
  quantity.addEventListener("input", (e) => dc.updateQuantity(e.target.value));
  const close = dc.obj.querySelector(".close");
  close.addEventListener("click", () => dc.removeItem());

  cartBlock.appendChild(dc.obj);
  checkCart();
  return dc;
};