function productCard(product) {
  console.log(product);
  const htmlCode = `
    <div class="product-card">
          <img
          src="${product.img}" alt=""/>
          <h4>$${product.price}</h4>
          <h4>"${product.title}"</h4>
          
          <h4>${product.price}</h4>
          <p>${product.description}</p>
          <a href="">
            <button>View Item</button>
          </a>
    </div>
    `;
  return htmlCode;
}
export default productCard;
