import productCard from "../js/shared/productCard.js";
function loadProduct() {
  const url = "http://localhost:5000/api/latestproducts";
  fetch(url)
    .then((res) => res.json())
    .then((res) => printdata(res));
}

loadProduct();

function printdata(products) {
  const div = document.getElementById("product-container");
  let htmlCode = "";
  products.forEach((product) => {
    htmlCode += productCard(product);
  });

  div.innerHTML = htmlCode;
}
