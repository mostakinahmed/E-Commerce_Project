import { makeUrl } from "./shared/commonFun.js";
import productCard from "./shared/productCard.js";

function loadProduct() {
  const url = makeUrl("/products");
  fetch(url)
    .then((res) => res.json())
    .then((data) => printData(data));
}

function printData(products) {
  const div = document.getElementById("our-product-container");
  let htmlCode = "";
  products.forEach((product) => {
    const code = productCard(product);
    htmlCode += code;
  });
  div.innerHTML = htmlCode;
}
loadProduct();
