const get_products = require('../controllers/get-products');
const update_products = require('../controllers/update-products.js');
const add_product = require('../controllers/add-products.js');
const delete_product = require('../controllers/delete-product.js');

app.use('/api/products', get_products);
app.use('/api/update', update_products);
app.use('/api/add', add_product);
app.use('/api/delete', delete_product);
