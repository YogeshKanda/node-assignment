const express = require('express');
const app = express();
const data_handler = require('./data-access.js');

const PORT = process.env.PORT || 4000;

//NOTE: Always send a http status

app.get('/', (req, res) => {
    res.status(200).send('Intial setup');
});

app.get('/api/all-products', (req, res) => {
    data_handler.getAllProducts()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err))
});

app.get('/api/product/:id', (req, res) => {
    data_handler.getAProduct(parseInt(req.params.id))
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
})

app.put('/api/product/:id', (req, res) => {
    let id = req.params.id;

    let req_body = req.body;

    //TODO: Get the data from site

    //TODO: Send the data to data object

    //TODO: Get it from data object

    //TODO: Update the JSON file
    res.status(200).send("PUT")
})

app.post('/add-product', (req, res) => {
    let new_product_details = req.body;

    //TODO: Send the new product data to data object
    res.status(200).send("POST")
})

app.delete('/api/delete/:id', (req, res) => {
    let id = req.params.id;
    data_handler.deleteAProduct(parseInt(req.params.id))
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))

    //TODO: get data object to delete this product

    //TIP: Use array.find and array.filter -> https://www.youtube.com/watch?v=K9jTQPb0Xso
})

app.listen(PORT, () => {
    console.log("listening on port", PORT);
});