const express = require('express');
const bcrypt = require('bcryptjs')
const { asyncHandler } = require('../utils');
const { requireAuth, getUserToken } = require('../auth');
const { check, validationResult } = require('express-validator')

const router = express.Router();

validateUserFields = [
    check("username")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a username"),
    check("firstName")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a first name"),
    check("lastName")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a last name"),
    check("email")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a valid email"),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a valide email")
]

const validateEmailPassword = [
    check("email")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a valid email"),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a valide email")
]


//logging in
router.post('/token', validateEmailPassword, asyncHandler(async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({
        where: {
            email
        }
    })
    if (!user || !user.validatePassword(password)) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["the provided credentials were invalid"];
        return next(err);
    }
    const token = getUserToken(user);

    res.json({
        token,
        user: { id: user.id }
    });



}
))

module.exports = router;
