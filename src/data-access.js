const file_handler = require('fs');
const path = require('path');

const file_path = path.join(__dirname, '../product-data.json');

function getAllProducts() {
    return readDataFromFile(file_path);
}

function getAProduct(id) {
    //TODO: If id is not a number
    return readDataFromFile(file_path)
        .then((all_products) => {
            expected_product = all_products.find(product => product.productId === id);
            if (expected_product) {
                return expected_product;
            } else {
                //TODO: Use error handling here
                return "Product Not Found"
            }
        })
        .catch((err) => {
            //TODO: Use error handling here
            return err;
        })
}

function updateAProduct(id, product_details) {
}

function addAProduct(product_details) {
}

function deleteAProduct(id) {
    return readDataFromFile(file_path)
        .then((all_products) => {
            expected_product = all_products.find(product => product.productId === id);
            if (expected_product) {
                let updated_data = all_products.filter(product => product !== expected_product);
                if (updated_data) {
                    return updateProductInFile(file_path, updated_data);
                } else {
                    return "File could not be updated"
                }
            } else {
                //TODO: Use error handling here
                return "Product Not Found"
            }
        })
        .catch((err) => {
            //TODO: Use error handling here
            return err;
        })
}

function readDataFromFile(file_path) {
    return new Promise((resolve, reject) => {
        file_handler.readFile(file_path, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(JSON.parse(data))
            return
        })
    })
}

function updateProductInFile(file_path, updated_data) {
    return new Promise((resolve, reject) => {
        console.log(file_path, updated_data)
        file_handler.writeFile(file_path, JSON.stringify(updated_data), 'utf-8', err => {
            console.log("in write file")
            if (err) {
                reject(err)
                return
            }
            resolve("File Updated")
            return
        })
    })
}

module.exports = { getAProduct, getAllProducts, updateAProduct, addAProduct, deleteAProduct };