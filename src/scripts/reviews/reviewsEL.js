import dataManager from "../utilities/dataManager";
import product from "../product/product";
import reviewHtml from "./reviewHtml";

//fetch data by joining
//make html
//printtodom

const $ = document.querySelector.bind(document)

const reviewsEl = () => {
    $(".reviews").addEventListener("click", () => {
        dataManager.get(`reviews?productId=${$("#productId").value}`).then(
            (reviews) => {
                console.log(reviews)
                reviews.forEach(review => {
                   $(".product_info").innerHTML += reviewHtml(review)
                });
            }
        )
    })
}

export default reviewsEl