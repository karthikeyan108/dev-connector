const express = require("express");
const router = express.Router();
//@route GET app/profile
//@desc test route
//@access public
router.get("/", (req, res) => res.send("profileroute"));

module.exports = router;
