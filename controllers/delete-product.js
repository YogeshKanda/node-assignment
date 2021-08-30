var express = require('express')
var router = express.Router()
const data_handler = require('../model/data-access.js');

router.delete('/:id(\d+)', (req, res) => {
    data_handler.deleteAProduct(parseInt(req.params.id))
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
});

router.delete('*', (req, res, next) => {
    let err = new Error("Forbidden")
    err.statusCode = 403
    next(err)
});

module.exports = router;