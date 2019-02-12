
const dataManager = {
    get: (databaseName) => {
        return fetch(`http://localhost:8088/${databaseName}`)
            .then(res => res.json())
    },
    post: (databaseName, obj) => {
        return fetch(`http://localhost:8088/${databaseName}`, {
            method: "POST",
            headers: {
                "content_type": "application/JSON"
            },
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
    },
    getSingleProduct: (databaseName, productId) => {
        return fetch (`http://localhost:8088/${databaseName}/${productId}`)
        .then (res => res.json())
    }
}


export default dataManager
