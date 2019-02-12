import dataManager from "../utilities/dataManager";
import printToDOM from "../utilities/printToDOM";
import productListHtml from "./productListHtml";

//fetch products
//interate on products
//convert each product into html
//printtodom

const productList = () =>{
    document.querySelector(".product_list").innerHTML = ""
    dataManager.get("products")
    .then((products) => {
        products.forEach(product => {
            printToDOM(productListHtml(product), ".product_list" )
        });
    })
}

export default productList