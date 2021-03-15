const express = require('express');

const router = express.Router();

const { addCategory, getCategory } = require('../controller/category');
const { adminMiddleware, requireSignin } = require('../controller/common-middlewares');

router.post('/product/create', requireSignin, adminMiddleware, addCategory);
router.get('/category/getcategory', getCategory);

module.exports = router;