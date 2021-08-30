var express = require('express')
var router = express.Router()
const data_handler = require('../model/data-access.js');

router.put('/:id()\d+', (req, res) => {
    let id = parseInt(req.params.id);

    data_handler.updateAProduct(id, req.body)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
})

router.put('*', (req, res, next) => {
    let err = new Error("Forbidden")
    err.statusCode = 403
    next(err)
});

module.exports = router;