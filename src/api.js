const express = require('express');
const data_handler = require('./data-access.js');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json())

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

app.put('/api/update-product/:id', (req, res) => {
    let id = parseInt(req.params.id);

    data_handler.updateAProduct(id, req.body)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
})

app.post('/api/add-product', (req, res) => {
    let new_product_details = req.body;

    console.log(new_product_details)

    data_handler.addAProduct(new_product_details)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
})

app.delete('/api/delete-product/:id', (req, res) => {
    let id = req.params.id;
    data_handler.deleteAProduct(parseInt(req.params.id))
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
})

app.listen(PORT, () => {
    console.log("listening on port", PORT);
});