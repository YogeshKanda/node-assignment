/**
 * TODO: ADD PRODUCT
 * 1. Input data mismatch (400)
 * 2. There is some issue at server side. Please check the log. (500)
 * 3. same product already exists (in case the product with the same id is already present in the file) (500)
 */

/**
 * TODO: DELETE/UPDATE/GET A PRODUCT
 * 1. “the product doesn’t exist”, (in case the incorrect product id is sent) (400)
 */

/**
 * TODO: FETCH ALL PRODUCTS
 * 1. “no record found”, (in case the file is empty) (400)
 */

/**
 * TODO: File handling errors
 * TODO: Prevent server crash/error handle them
 */

function checkIfIdisANumber(id) {
    let parsed_id = parseInt(id);
    if (parsed_id === NaN) {
        return {
            "statusCode": 400,
            "status": "failure",
            "message": "Product not found",
            "data": []
        }
    }
    return parsed_id;
}

function checkIfProductExists(product_details) {
    if (product_details) {
        return {
            "statusCode": 200,
            "status": "success",
            "message": "Product data found",
            "data": product_details
        }
    } else {
        return {
            "statusCode": 400,
            "status": "failure",
            "message": "Product not found",
            "data": []
        }
    }
}

module.exports = { checkIfIdisANumber, checkIfProductExists };