const { check, validationResult } = require('express-validator');
exports.validateSignupRequest = [
    check("firstName").notEmpty().withMessage("first Name is required"),
    check("lastName").notEmpty().withMessage("Last Name is required"),
    check("email").isEmail().withMessage("Valid Email is required"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 character long"),
]
 
exports.validateSignInRequest = [
    
    check("email").isEmail().withMessage("Valid Email is required"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 character long"),
]
exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().lenth > 0) {
        // return res.status(400).json({error: errors.array()[0].msg})
    }
    next();
}