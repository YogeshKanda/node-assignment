const file_handler = require('fs');

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
        file_handler.writeFile(file_path, JSON.stringify(updated_data), 'utf-8', err => {
            if (err) {
                reject(err)
                return
            }
            resolve("File Updated")
            return
        })
    })
}

module.exports = { updateProductInFile, readDataFromFile };