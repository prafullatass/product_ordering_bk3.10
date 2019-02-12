import dataManager from "../utilities/dataManager";
import productHtml from "./productHtml";
import reviewsEl from "../reviews/reviewsEL";

// EL on article
//if is clicked on section then get product id from section id
// create html for that product
// printTODOM
const $ = document.querySelector.bind(document)

const productEL = () => {
    $(".product_list").addEventListener("click", evt => {
        //console.log(evt.target.id)
        const targetIdArray = evt.target.id.split("--")[1]
        console.log(targetIdArray)
        dataManager.getSingleProduct("products", targetIdArray)
            .then(product => {
                productHtml(product)
                reviewsEl()
            })
    })
}

export default productEL