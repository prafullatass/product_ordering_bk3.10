
const printToDOM = (html, selector) => {
    document.querySelector(selector).innerHTML += html
}

export default printToDOM

