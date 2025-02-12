import { makeUrl } from "./shared/commonFun.js";

function loadProduct() {
  const url = makeUrl("/products");
  fetch(url)
    .then((res) => res.json())
    .then((data) => printData(data));
}

function printData(products) {
  console.log(products);
}
loadProduct();
