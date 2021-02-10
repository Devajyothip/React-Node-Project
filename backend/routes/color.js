var router = require('express').Router();

const colors = require("../controllers/color.js");
router.post("/", colors.findOne);
router.put("/", colors.update);

module.exports = router;