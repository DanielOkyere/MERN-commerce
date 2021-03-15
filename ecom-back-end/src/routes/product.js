const express = require('express');
const multer = require('multer');
const router = express.Router();
// const Product = require('../models/product');
const shortid = require('shortid');
const path = require('path');

// const { addCategory, getCategory } = require('../controller/product');
const { adminMiddleware, requireSignin } = require('../controller/common-middlewares');
const { createProducts } = require('../controller/product');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), "uploads"))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + "-" + file.originalname);
    }
})

const upload = multer({storage});

router.post('/product/create', requireSignin, adminMiddleware, upload.array('productPicture'), createProducts );
// router.get('/category/getcategory', getCategory);

module.exports = router;