const express = require("express");
const router = express.Router();
//@route GET app/auth
//@desc test route
//@access public
router.get("/", (req, res) => res.send("authroute"));

module.exports = router;
