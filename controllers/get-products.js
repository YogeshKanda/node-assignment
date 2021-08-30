var express = require('express')
var router = express.Router()
const data_handler = require('../model/data-access.js');

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })

router.get('/all', (req, res) => {
    data_handler.getAllProducts()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err))
});

router.get('/:id(\d+)', (req, res, next) => {
    data_handler.getAProduct(parseInt(req.params.id))
        .then(data => res.status(200).send(data))
        .catch(next)
});

router.get('*', (req, res, next) => {
    let err = new Error("Page Not Found")
    err.statusCode = 404
    next(err)
});

module.exports = router;