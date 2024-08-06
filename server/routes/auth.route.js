const express = require("express");
const {
  signup,
  signin,
  google,
  signout,
} = require("../controller/auth.controller");
const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.post("/google", google);
module.exports = router;
