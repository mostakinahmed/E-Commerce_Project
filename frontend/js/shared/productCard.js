import { sliceDescription } from "./commonFun.js";

function productCard(product) {
  const { img, title, price, description } = product;

  const htmlCode = `
    <div class="product-card">
          <img
          src="${img}" alt=""/>
          <h4>$${price}</h4>
          <h3>${title}</h3>
          <h4>"${sliceDescription(description)}"</h4>
          
          <a href="">
            <button>View Item</button>
          </a>
    </div>
    `;
  return htmlCode;
}
export default productCard;
