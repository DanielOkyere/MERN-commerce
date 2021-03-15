const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { signup, signin} = require("../controller/auth");
const { validateSignupRequest, isRequestValidated } = require("../validators/auth");

router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", signin);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({
//         user:'profile'
//     })
// })

module.exports = router;
