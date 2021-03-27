const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { signup, signin } = require("../controller/auth");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSignInRequest,
} = require("../validators/auth");
const { signout } = require("../controller/auth");
const { requireSignin } = require("../controller/common-middlewares");


router.post("/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/signin", validateSignInRequest, isRequestValidated, signin);
router.post("/signout", requireSignin, signout);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({
//         user:'profile'
//     })
// })

module.exports = router;
