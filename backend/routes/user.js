var router = require('express').Router();

const users = require("../controllers/user.js");
router.post("/signin", users.signin);
router.post("/signup", users.signup);

module.exports = router;