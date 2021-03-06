const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
//@route GET app/users
//@desc test route
//@access public
router.get(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "please provide valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more characters"
    ).isLength({ min: 8 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("userroute");
  }
);
module.exports = router;
