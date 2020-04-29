const express = require("express");
const router = express.Router();
//@route GET app/post
//@desc test route
//@access public
router.get("/", (req, res) => res.send("postroute"));

module.exports = router;
