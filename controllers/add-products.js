var express = require('express')
var router = express.Router()
const data_handler = require('../model/data-access.js');

router.post('/', (req, res) => {
    data_handler.addAProduct(req.body)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
});

router.post('*', (req, res, next) => {
    let err = new Error("Forbidden")
    err.statusCode = 403
    next(err)
});

module.exports = router;