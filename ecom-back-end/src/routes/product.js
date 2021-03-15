const express = require('express');

const router = express.Router();
const Product = require('../models/product');

// const { addCategory, getCategory } = require('../controller/product');
const { adminMiddleware, requireSignin } = require('../controller/common-middlewares');

router.post('/product/create', requireSignin, adminMiddleware, (req, res) => {
    res.status(200).json({ message: 'Helo' });
});
// router.get('/category/getcategory', getCategory);

module.exports = router;