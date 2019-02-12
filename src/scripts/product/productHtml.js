
const productHtml = (product) => {
    const productInfoEl = document.querySelector(".product_info")
    productInfoEl.innerHTML = `
    <h1> ${product.title}</h1>
    <div id = "imageDesc">
        <img src="${product.image}" alt="anything">
        <p><strong> Description : </strong>${product.description}</p>
    </div>
    <div> <strong> Price : ${product.price} </strong></div>
     <div> <strong> Quantity : ${product.qty} </strong> </div>
     <input type="hidden" id="productId" name="productId" value="${product.id}">
    <div class ="reviews makeLink"> Reviews </div>`
}

export default productHtml