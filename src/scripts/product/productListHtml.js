const productListHtml = (product) => {
    return `<section id = "product--${product.id}">
        ${product.title}  </section>`
}

export default productListHtml